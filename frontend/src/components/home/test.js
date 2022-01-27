import React, { Component } from 'react';

import { connect } from 'react-redux';


export class testLanding extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <h1>hellooooooooooooooooooooooooo this is a test page</h1>

       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.products.loading
});

export default connect(mapStateToProps)(testLanding);
