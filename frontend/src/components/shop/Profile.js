
import React, { Component } from 'react';
import axios from "axios"
import { connect } from 'react-redux';
import Test from '../ProductManagement/Test';
import Landing  from '../home/Landing';
import { logout } from '../../actions/shopActions';

export class Profile extends Component{
    constructor(props){
        super(props)
            this.state ={storeID :"",
                editEmail:"",
                editAddress:"",
                editCity:"",
                editDistrict:"",
                editPassword:"",
                editName:"",
                isEdit: false
            }
            this.handleChange = this.handleChange.bind(this);

        
    }
    handleChange(event){
        this.setState({
          [event.target.name] : event.target.value
        })
      }
  

    handleDelete = async (id) =>{
        let baseUrl ="http://127.0.0.1:5000"
        await axios.delete(`${baseUrl}/store/${id}`)
        this.props.logout();
    }

    handleEdit = (store) =>{
      this.setState({
        storeID :store.id,
        editName:store.name,
        editEmail:store.email,
        editAddress:store.address ,
        editCity:store.city,
        editDistrict:store.district,
        editPassword:store.password,
        isEdit:true
      })
    }

    handleChange(event){
        this.setState({
          [event.target.name] : event.target.value
        })
      }

    handleEditSubmit = async (e) =>{
      e.preventDefault();
      let baseUrl ="http://127.0.0.1:5000"
      let editEmail=this.state.editEmail
      let editAddress=this.state.editAddress
      let editCity=this.state.editCity
      let editDistrict=this.state.editDistrict
      let editPassword=this.state.editPassword;
      let editName= this.state.editName;
      let id =this.state.storeID
        console.log(id)
      const response = await axios.put(`${baseUrl}/stores/${id}}`,
      {name:editName,email:editEmail,address:editAddress,city:editCity,
        district:editDistrict,password:editPassword});
      document.querySelector('#errormsg').textContent=response.data;
        if(response.data==="Modification Successfull !!!!"){
            this.setState({isEdit:false})
        }
      
    }
    
   
     
    

    render(){
     if(this.props.isSuccessfullregister||this.props.isloggedin){
         if( this.state.isEdit){
             return(
            <div className="jumbotron jumbotron-fluid mt-5 text-center">

            <h1>Edit Details</h1>
            <div className="container">
            
              <form id="searchForm"onSubmit={this.handleEditSubmit} >
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4" text-align="left">Store Name</label>
                    <input type="text" class="form-control" id="editName" aria-describedby="emailHelp" 
                    placeholder="Enter Name" name = "editName"
                    value={this.state.editName} onChange={this.handleChange}/>
                  </div>
                
                  <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label mt-4" text-align="left">Email address</label>
                    <input type="email" class="form-control" id="editEmail" aria-describedby="emailHelp" 
                    placeholder="Enter email" name = "editEmail"
                    value={this.state.editEmail} onChange={this.handleChange} />
                  </div>
                
                  <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">Address</label>
                    <input type="text" class="form-control" id="address" aria-describedby="emailHelp" 
                    placeholder="Enter address of the shop" name = "editAddress" 
                    value={this.state.editAddress} onChange={this.handleChange} />
                  </div>
                  <div class="form-group">
                    <label for="exampleTextarea" class="form-label mt-4">City</label>
                    <input type="text" class="form-control" id="city" aria-describedby="emailHelp" 
                    placeholder="Enterthe  city" name = "editCity"
                    value={this.state.editCity} onChange={this.handleChange} />
                  </div>
                  
                  <div class="form-group">
                    <label for="exampleSelect2" class="form-label mt-4">District</label>
                    <select multiple="" class="form-select" id="exampleSelect2"
                    value={this.state.editDistrict} name = "editDistrict"
                    onChange={this.handleChange} 
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
                    placeholder="Password" name ="editPassword"
                     onChange={this.handleChange}/>
                  </div>
    
                <button type="submit" className="btn btn-primary btn-bg mt-3"   > 
                Do modification
                </button>
                
              </form>
              <p class="text-warning" id='errormsg'>{this.props.reg_error}</p> 
            </div>
          </div>
             );
         }
         else{
            return ( 
                <div >
                    <h2>Your profile!</h2>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Name : { this.props.data.name }
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Email : { this.props.data.email }
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Address : { this.props.data.address }

                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                  City : {this.props.data.city}
                     
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    District : {this.props.data.district}                     
                    </li>
                </ul> 
                <button type="button" class="btn btn-outline-primary"
                 onClick={() => this.handleEdit(this.props.data)}>Edit</button>
                <button type="button" class="btn btn-outline-primary"
                  onClick={() => this.handleDelete(this.props.data.id)}>Delete</button>                  
              
              </div>
          
      
        
            );
         }
        }
        else{
          return(
            <div><Landing/></div>
          )
        } 
     }
}
const mapStateToProps = state => ({
  isloggedin : state.products.isloggedin,
  isSuccessfullregister: state.products. isSuccessfullregister,
  data :state.products.data
});

export default connect(mapStateToProps,{logout}
  )(Profile);

  

