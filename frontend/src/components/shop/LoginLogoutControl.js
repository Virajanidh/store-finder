import React, { Component } from 'react';

import { connect } from 'react-redux';

import Loginform  from './Loginform';
import ManageOwnItems from './ManageOwnItems';



export class LoginLogoutControl extends Component {
  render() {
    const { isloggedin,isSuccessfullregister } = this.props;
    return (
      <div className="container">
        { isloggedin ? <ManageOwnItems /> : <Loginform/>}
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
    isloggedin : state.products.isloggedin,
    
});

export default connect(mapStateToProps)(LoginLogoutControl);
