import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '../pages/Home';
import ProductPage from '../pages/ProductPage';

import Cart from '../pages/Cart';
import ListItems from '../pages/ListItems';

function routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/product/:id' component={ProductPage} />

      <Route path='/cart' component={Cart} />
      <Route path='/list-items' component={ListItems} />
    </Switch>
  );
}

export default routes;
