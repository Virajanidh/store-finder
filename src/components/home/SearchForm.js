import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchProduct,
  fetchProducts,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {

  test =()=>{
    console.log('success')
  }
  
  onChange = e => {
    this.props.searchProduct(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchProducts(this.props.text);
    this.props.setLoading();
  };

  render() {
    
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a product  ..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                          type="text"
                          className="form-control"
                          name="searchText"
                         
                          placeholder="Search Item ..."
                          onChange={this.onChange}
                    />
                  </th>
                  <th scope="col">
                    <input
                          type="text"
                          className="form-control"
                          name="location"
                          
                          placeholder="Your District ..."
                          onChange={this.onChangeHandle}
                    />
                  </th> 
                </tr>
              </thead>
              </table>

            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>

          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.products.text
});

export default connect(
  mapStateToProps,
  { searchProduct, fetchProducts, setLoading }
)(SearchForm);
