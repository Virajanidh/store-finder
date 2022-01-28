import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class ManageOwnItems extends Component {

  

  render() {
    
 
    return(
      <div>
         
          <div class="d-grid gap-2">
          <h1 align = 'center' >Manage your Products</h1>
          <div className='row'>
            <Link style={{maxWidth:'30rem'}} btn btn-outline-primary to={'/create'}>
              <h5> Add product </h5>
            </Link>
            <button class="btn btn-outline-secondary" type="button">Update Items</button>
            <button class="btn btn-outline-primary" type="button">View My Items</button>
            <button class="btn btn-outline-secondary" type="button">Delete Items</button>
          </div>
        </div>
      </div>
    );
  }
}


export default ManageOwnItems;