import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//import { AddProduct } from '../ProductManagement/AddProduct';

import AddProduct from '../ProductManagement/AddProduct';
export class ManageOwnItems extends Component {

  

  render() {
    
 
    return(
      <div>
         <AddProduct/>
          
      </div>
    );
  }
}


export default ManageOwnItems;

/*<div class="d-grid gap-2">
          <h1 align = 'center' >Manage your Products</h1>
          <div className='row'>
            <Link style={{maxWidth:'30rem'}} btn btn-outline-primary to={'/create'}>
              <h5> Edit / Delete product </h5>
            </Link>
            <Link style={{maxWidth:'30rem'}} btn btn-outline-primary to={'/addproduct'}>
              <h5> Add product </h5>
            </Link>
            <Link style={{maxWidth:'30rem'}} btn btn-outline-primary to={'/areasuggestions'}>
              <h5> Preference at Area  </h5>
            </Link>
            
          </div>
        </div>*/