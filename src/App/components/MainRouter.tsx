import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from 'products';
import Details from 'details';
import Payment from 'payment';
import Summary from 'summary';

const MainRouter = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/details" component={Details} />
      <Route path="/payment/:id" component={Payment} />
      <Route path="/summary" component={Summary} />

      {/* This route should be placed last because it matches every possible route */}
      <Route path="/" component={Products} />
    </Switch>
  );
};

export default MainRouter;
