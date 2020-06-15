import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from 'products';
import Details from 'details';
import Payment from 'payment';
import Summary from 'summary';
import Terms from 'terms';

const MainRouter = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Products} />
        <Route path="/details" exact component={Details} />
        <Route path="/payment/:id" exact component={Payment} />
        <Route path="/summary/:id" exact component={Summary} />
        <Route path="/terms" exact component={Terms} />
      </Switch>
    </Router>
  );
};

export default MainRouter;
