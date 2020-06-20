import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from 'products';
import Details from 'details';
import Payment from 'payment';
import Summary from 'summary';
import Terms from 'terms';
import Orders from 'orders';

const MainRouter = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/details" exact component={Details} />
      <Route path="/payment/:id" exact component={Payment} />
      <Route path="/summary/:id" exact component={Summary} />
      <Route path="/Orders/:dateId" exact component={Orders} />
      <Route path="/terms" exact component={Terms} />
    </Switch>
  );
};

export default MainRouter;
