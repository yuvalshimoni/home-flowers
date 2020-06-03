import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from 'products';
import Details from 'details';
import Payment from 'payment';
import Summary from 'summary';

const MainRouter = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/details" exact component={Details} />
      <Route path="/payment/:id" exact component={Payment} />
      <Route path="/summary" exact component={Summary} />
    </Switch>
  );
};

export default MainRouter;
