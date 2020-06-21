import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeadPage, SubTitle, FlexCenter, MainTitle, CartTable } from 'shared/components';
import format from 'date-fns/format';
import { useParams } from 'react-router-dom';
import { useGetOrdersByDateQuery } from '../graphql/orders.generated';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Query } from 'graphql/types.generated';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div``;

const Content = styled.div``;

const TableWrapper = styled.div`
  margin-bottom: 50px;
`;

type FormatByCity = Query['orders'] | undefined;

const formatByCity = (orders: FormatByCity) => {
  if (!orders) return false;

  console.log(orders);
  return orders.reduce((state, item) => {
    if (!item?.city?.id) return state;
    const cityId = item!.city!.id as string;

    return state.some((c) => c.id === cityId)
      ? state.map((city) => {
          if (city.id === cityId) {
            return { ...city, orders: [...city.orders, item] };
          } else {
            return city;
          }
        })
      : state.concat([{ ...item.city, orders: [item] }]);
  }, []);
};

const Orders = (): JSX.Element => {
  const [cities, setCities] = useState([]);
  const { dateId } = useParams();
  const { data, loading } = useGetOrdersByDateQuery({
    variables: {
      dateId,
    },
  });

  useEffect(() => {
    if (data?.deliveryDate?.orders) {
      setCities(formatByCity(data.deliveryDate.orders));
    }
  }, [data]);

  // console.log(cities);

  return (
    <Wrapper>
      {loading ? (
        <FlexCenter>
          <CircularProgress />
        </FlexCenter>
      ) : (
        <>
          <HeadPage>
            <SubTitle>
              הזמנות לתאריך: {format(new Date(data.deliveryDate.deliveryDate), 'd.M.Y')}
            </SubTitle>
          </HeadPage>

          {cities.length > 0 && (
            <Content>
              {cities!.map((city) => (
                <TableWrapper key={city.id}>
                  <MainTitle>{city.name}</MainTitle>

                  <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell>שם</TableCell>
                          <TableCell align="right">פלאפון</TableCell>
                          <TableCell align="right">סהכ</TableCell>
                          <TableCell align="right">שולם</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {city.orders.map((row) => (
                          <>
                            <TableRow key={row.name}>
                              <TableCell component="th" scope="row">
                                {row.name}
                              </TableCell>

                              <TableCell align="right">{row.phone}</TableCell>
                              <TableCell align="right">{row.total}</TableCell>
                              <TableCell align="right">{String(row.is_paid)}</TableCell>
                            </TableRow>

                            <CartTable
                              small
                              editable={false}
                              cart={row.orderproducts.map((item) => ({
                                productId: item.product.id,
                                quantity: item.quantity,
                                price: item.price,
                              }))}
                            />
                          </>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TableWrapper>
              ))}
            </Content>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Orders;
