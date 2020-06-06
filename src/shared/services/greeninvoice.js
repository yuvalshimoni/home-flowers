import axios from 'axios';

const baseURL = 'https://sandbox.d.greeninvoice.co.il/api/v1';

const http = axios.create({
  baseURL,
  responseType: 'json',
});

const getToken = async () => {
  let res;
  const body = {
    id: '67ce9606-8235-4154-aaec-9bc4e2f7e6b2',
    secret: 'Fv7RMIA8Ef7wdBi5vMXRZg',
  };

  try {
    res = await http.post('/account/token', body);
  } catch (e) {
    console.log(e);
    return false;
  }

  return res.data.token;
};

const getIframeUrl = async ({ token, orderId, amount, name, phone, cityName, cart }) => {
  let res;

  http.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });

  const income = cart.map(({ quantity, price, product }) => ({
    catalogNum: product?.id,
    description: product?.title,
    quantity,
    price,
    currency: 'ILS',
    vatType: 0,
  }));

  const body = {
    description: 'Home Flowers - Order',
    type: 400,
    lang: 'he',
    currency: 'ILS',
    vatType: 0,
    amount,
    maxPayments: 1,
    pluginId: '6e5eec8b-368d-4b89-953b-72c9959a8f1b',
    client: {
      name,
      // emails: ['email1@example.com', 'email2@example.com'],
      city: cityName,
      country: 'IL',
      phone,
      mobile: phone,
      add: true,
    },
    income,
    successUrl: `https://home-flowers.firebaseapp.com/summary/${orderId}`,
    failureUrl: 'https://admin.homeflowers.co.il/payment/fail',
    notifyUrl: 'https://admin.homeflowers.co.il/payment/notify',
    custom: orderId,
  };

  try {
    res = await http.post('/payments/form', body);
  } catch (e) {
    console.log(e);
    return false;
  }

  return res.data.url;
};

export { getToken, getIframeUrl };
