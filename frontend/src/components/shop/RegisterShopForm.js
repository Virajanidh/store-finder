import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import {regformFilling,registerStore} from '../../actions/shopActions';
import ManageOwnItems from './ManageOwnItems.js'

export class RegisterShopForm extends Component {

  constructor(props){
    super(props)
    this.state = { name:'', address :'', email:'', password:'',city:'', district:'' }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
    this.handleChangedistrict =this.handleChangedistrict.bind(this)
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
  
  handleChangedistrict(event){this.setState({district :event.target.value});}


  onSubmit = e => {
    if(this.state.name==''|| this.state.address ==''|| this.state.email==''|| this.state.password==''||this.state.city==''|| this.state.district==''){
      document.querySelector('#errormsg').textContent="Please complete all the fields";
    }
    else{
    e.preventDefault();
    console.log('form submitted')
    this.props.registerStore(this.props.data);
    }
 
  };

  render() {
    this.test();
    const  {isSuccessfullregister} =this.props

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
                <label for="exampleTextarea" class="form-label mt-4">City</label>
                <input type="text" class="form-control" id="city" aria-describedby="emailHelp" 
                placeholder="Enterthe  city" name = "city" onChange={this.handleChange} />
              </div>
              
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


              <div class="form-group">
                <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
                <input type="password" class="form-control" id="password" 
                placeholder="Password" name ="password" onChange={this.handleChange}/>
              </div>

            <button type="submit" className="btn btn-primary btn-bg mt-3"   > 
            Register
            </button>
            
          </form>
          <p class="text-warning" id='errormsg'></p> 
        </div>


      </div>
    );
    
  }
}



const mapStateToProps = state => ({
  data: state.shopOwner.data,
  isSuccessfullregister: state.shopOwner.isSuccessfullregister
});

export default connect(
  mapStateToProps,
  { regformFilling, registerStore}
)(RegisterShopForm);
