import React, { Component } from 'react';
import authfail from '../ProductManagement/authfail.png'
import { connect } from 'react-redux';


export class Test extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <img src = {authfail}></img>

       
      </div>
    );
  }
}


export default Test;
