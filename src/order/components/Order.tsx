import React from 'react';
import styled from 'styled-components';
import PickProducts from './PickProducts';
import Details from './Details';
import Payment from './Payment';
import Summary from './Summary';

// const orderShape = {
//   cart = [],
//   total,
//   target,
//   date,
//   name, 
//   phone,
//   isPaid,
// }

const Wrapper = styled.div`
`;

const Order = () => {
  return (
    <Wrapper>
      <PickProducts />
      {/* <Details cart={cart}/>
      <Payment />
      <Summary /> */}
    </Wrapper>
  );
};

export default Order;