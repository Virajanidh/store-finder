import React, { Component } from 'react';

import { connect } from 'react-redux';


import ManageOwnItems from './ManageOwnItems';
import RegisterShopForm from './RegisterShopForm'


export class RegistrationControl extends Component {
  render() {
    const { isSuccessfullregister } = this.props;
    return (
      <div className="container">
        { isSuccessfullregister ? <ManageOwnItems/> : <RegisterShopForm/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
    
    isSuccessfullregister : state.products.isSuccessfullregister
});

export default connect(mapStateToProps)(RegistrationControl);