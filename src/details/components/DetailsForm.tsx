import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { FlexRowSpaceBetween, Button, FlexColumn, SubTitle, FadeIn } from 'shared/components';
import TextField from '@material-ui/core/TextField';
import { useAppState } from 'shared/hooks';
import { useCreateOrderMutation, useCreateOrderproductMutation } from 'shared/graphql';

import { useHistory } from 'react-router-dom';

const FormWrapper = styled(FlexRowSpaceBetween)`
  display: grid;
  grid-gap: 50px;
  align-items: start;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media (max-width: 500px) {
    grid-gap: 0px;
    margin-bottom: 40px;
  }
`;

const FormTitle = styled(SubTitle)`
  margin-bottom: 20px;
`;

const FieldWrapper = styled(FlexColumn)``;

const SubmitWrapper = styled.div``;

const Error = styled.div`
  height: 35px;
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.sizes.small}px;
`;

type FormValues = {
  name: string;
  phone: number;
};

const DetailsForm = (): JSX.Element => {
  const [createOrder, { loading: isCreateOrderLoading }] = useCreateOrderMutation();
  const [
    createOrderproduct,
    { loading: isCreateOrderproductLoading },
  ] = useCreateOrderproductMutation();

  const history = useHistory();
  const {
    cart,
    totalCart,
    setOrderDetails,
    orderDetails: { name, phone, delivery_date, city },
  } = useAppState();

  const { control, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      name,
      phone,
    },
  });

  const makeOrderproduct = useCallback(
    async (order_id, { productId, quantity, price }) => {
      return createOrderproduct({
        variables: {
          order_id,
          product: productId,
          quantity,
          price,
        },
      });
    },
    [createOrderproduct],
  );

  const saveCart = useCallback(
    async (order_id) => {
      return Promise.all(cart.map((item) => makeOrderproduct(order_id, item)));
    },
    [cart, makeOrderproduct],
  );

  const onSubmit = useCallback(
    async ({ name, phone }: any) => {
      setOrderDetails((state) => ({
        ...state,
        name,
        phone,
      }));

      const { data } = await createOrder({
        variables: {
          name,
          phone: String(phone),
          city,
          delivery_date,
          total: totalCart,
        },
      });

      const orderId = data?.createOrder?.order?.id;

      await saveCart(orderId);

      history.push(`/payment/${orderId}`);
    },
    [history, setOrderDetails, createOrder, totalCart, city, saveCart, delivery_date],
  );

  return (
    <FadeIn>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>פרטים ליצירת קשר</FormTitle>

        <FormWrapper>
          <FieldWrapper>
            <Controller
              as={<TextField label="שם מלא" />}
              name="name"
              control={control}
              rules={{ required: 'היי איך נדע איך קוראים לך?' }}
              defaultValue=""
            />
            <Error>{errors.name && errors.name.message}</Error>
          </FieldWrapper>

          <FieldWrapper>
            <Controller
              as={<TextField label="טלפון " />}
              name="phone"
              control={control}
              rules={{
                required: 'בלי טלפון לא נוכל לתאם משלוח..',
                pattern: {
                  value: /^0\d([\d]{0,1})([-]{0,1})\d{7}$/,
                  message: 'מה זה עוזר הבאלגן הזה?',
                },
              }}
              defaultValue=""
            />
            <Error>{errors.phone && errors.phone.message}</Error>
          </FieldWrapper>

          <SubmitWrapper>
            <Button type="submit">לתשלום</Button>
          </SubmitWrapper>
        </FormWrapper>
      </form>
    </FadeIn>
  );
};

export default DetailsForm;
