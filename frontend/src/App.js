import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import test from './components/home/test';

import Landing from './components/home/Landing';
import Product from './components/home/Product';
import RegisterShopForm from './components/shop/RegisterShopForm';


import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/registershopform" component={RegisterShopForm} />
            <Route exact path="/test" component={test} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
