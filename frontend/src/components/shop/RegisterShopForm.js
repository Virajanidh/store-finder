import React, { Component } from 'react';
import { connect } from 'react-redux';

import {regformFilling,registerStore} from '../../actions/shopActions';

export class RegisterShopForm extends Component {

  constructor(props){
    super(props)
    this.state = { name:'', address :'', email:'', password:'',city:'', district:'' }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }

  test =()=>{
    
    console.log('state:',this.state)
    let address=this.state.address
    let city = this.state.city
    this.props.regformFilling(this.state);
  /*  let searchText =this.state.searchText;
    let  location = this.state.location
    if (searchText !== '' &&  location!== ''){
      this.props.searchProduct(searchText+'/'+location);
    } */
  }
  
  onChange = e => {
    this.props.regfromFilling(e.target.value);
  };


  onSubmit = e => {
    e.preventDefault();
    console.log('form submitted')
    this.props.registerStore(this.props.data);
    
   
 
  };

  render() {
    this.test();
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">

        <h1>Register Store</h1>
        <div className="container">
          
          <form id="searchForm"onSubmit={this.onSubmit} >
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4" text-align="left">Store Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" 
                placeholder="Enter Name" name = "name" onChange={this.handleChange}/>
              </div>
            
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4" text-align="left">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" 
                placeholder="Enter email" name = "email" onChange={this.handleChange} />
              </div>
            
              <div class="form-group">
                <label for="exampleTextarea" class="form-label mt-4">Address</label>
                <input type="text" class="form-control" id="address" aria-describedby="emailHelp" 
                placeholder="Enter address of the shop" name = "address" onChange={this.handleChange} />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4" text-align="left">City</label>
                <input type="text" class="form-control" id="city" aria-describedby="emailHelp" 
                placeholder="Enter City" name="city" onChange={this.handleChange}/>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1" class="form-label mt-4" text-align="left">District</label>
                <input type="text" class="form-control" id="district" aria-describedby="emailHelp" 
                placeholder="Enter District" name="district" onChange={this.handleChange}/>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                <input type="password" class="form-control" id="password" 
                placeholder="Password" name ="password" onChange={this.handleChange}/>
              </div>
              

            
          
            
             
          




            <button type="submit" className="btn btn-primary btn-bg mt-3"   > 
            Register
            </button>

          </form>
        </div>


      </div>
    );
  }
}



const mapStateToProps = state => ({
  data: state.shopOwner.data
});

export default connect(
  mapStateToProps,
  { regformFilling, registerStore}
)(RegisterShopForm);
