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

  handleChangedistrict=(event)=>{this.setState({location :event.target.value});}

  handleChange(event){
    let text =event.target.value;
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : text.toLowerCase()
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
      <div>
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
                  <div class="form-group">
                    <input
                          type="text"
                          className="form-control"
                          name="searchText"
                          
                          placeholder="Search Item ..."
                          onChange={this.handleChange}
                    />
                    </div>
                  </th>
                  <th scope="col">
                  

                          <div class="form-group">
                            <label for="exampleSelect2" class="form-label mt-4">District</label>
                            <select multiple="" class="form-select" id="exampleSelect2"
                            value={this.state.district} 
                            onChange={this.handleChangedistrict} 
                            >
                            <option value =""></option>
                            <option value ="ratnapura">Ratnapura</option>
                            <option value = "kegalle">Kegalle</option>
                            <option value = "colombo">Colombo</option>
                            <option value = "kalutara">Kalutara</option>
                            <option value = "gampaha">Gampaha</option>
                            <option value = "kandy">Kandy</option>
                            <option value = "matale">Matale</option>
                            <option value = "nuwara eliya">Nuwara Eliya</option>
                            <option value = "galle">Galle</option>
                            <option value = "matara">Matara</option>
                            <option value = "hambantota">Hambantota</option>
                            <option value = "jaffna">Jaffna</option>
                            <option value = "kilinochchi">Kilinochchi</option>
                            <option value = "mannar">Mannar</option>
                            <option value = "vavuniya">Vavuniya</option>
                            <option value = "mullaitivu">Mullaitivu</option>
                            <option value = "batticaloa">Batticaloa</option>
                            <option value = "ampara">Ampara</option>
                            <option value = "trincomalee">Trincomalee</option>
                            <option value = "kurunegala">Kurunegala</option>
                            <option value = "puttalam">Puttalam</option>
                            <option value = "anuradhapura">Anuradhapura</option>
                            <option value = "polonnaruwa">Polonnaruwa</option>
                            <option value = "badulla">Badulla</option>
                            <option value = "moneragala">Moneragala</option>
                            </select>
                        </div>

                  
                    
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
