import React, { Component } from 'react';
import "./dropdownbutton.css"
import { connect } from 'react-redux';

import {
  searchProduct,
  fetchProducts,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {

  constructor(props){
    super(props)
    this.state = { searchText:'',location:''}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }

  test =()=>{
    console.log('success')
    console.log('name;',this.state.searchText,'location',this.state.location)
    let searchText =this.state.searchText;
    let  location = this.state.location
    if (searchText !== '' &&  location!== ''){
      this.props.searchProduct(searchText+'/'+location);
    } 
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
    this.test();
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
                          onChange={this.handleChange}
                    />
                  </th>
                  <th scope="col">
                  

                  <input
                          type="text"
                          className="form-control"
                          name="location"
                          value = {this.state.location}
                          placeholder="Your District ..."
                          onChange={this.handleChange}
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

/*
 <input
                          type="text"
                          className="form-control"
                          name="location"
                          value = {this.state.location}
                          placeholder="Your District ..."
                          onChange={this.handleChange}
                    />  
*/

const mapStateToProps = state => ({
  text: state.products.text
});

export default connect(
  mapStateToProps,
  { searchProduct, fetchProducts, setLoading }
)(SearchForm);
