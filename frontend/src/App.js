import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/layout/Navbar';
import LoginLogoutControl from './components/shop/LoginLogoutControl';
import Landing from './components/home/Landing';
import Product from './components/home/Product';
import RegistrationControl from './components/shop/RegistrationControl';
import Suggestions  from './components/home/Suggestions';
import Create from './components/ProductManagement/Create';
import AddProduct  from './components/ProductManagement/AddProduct';
import AreaSuggestions from './components/ProductManagement/AreaSuggestions';



import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/registrationControl" component={RegistrationControl} />
            <Route exact path="/loginLogoutControl" component={LoginLogoutControl} />
            <Route exact path="/areasuggestions" component={AreaSuggestions} />
            <Route exact path="/addproduct" component={AddProduct}/>
            <Route exact path="/create" component={Create} />
            <Route exact path="/suggestions" component={Suggestions} />
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
