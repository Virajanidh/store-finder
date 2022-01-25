import React, { Component } from 'react';

import { connect } from 'react-redux';

import SearchForm from './SearchForm';
import ProductContainer from './ProductContainer';
import Spinner from '../layout/Spinner';

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Spinner /> : <ProductContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.products.loading
});

export default connect(mapStateToProps)(Landing);
