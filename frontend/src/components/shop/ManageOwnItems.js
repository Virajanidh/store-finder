import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class ManageOwnItems extends Component {
  render() {
    
 
    return(
      <div>
         
          <div class="d-grid gap-2">
          <h1 align = 'center' >Manage your Products</h1>
            <button class="btn btn-lg btn-primary" type="button">Add Items</button>
            <button class="btn btn-lg btn-primary" type="button">Update Items</button>
            <button class="btn btn-lg btn-primary" type="button">View My Items</button>
            <button class="btn btn-lg btn-primary" type="button">Delete Items</button>
        </div>
      </div>
    );
  }
}

export default ManageOwnItems;
