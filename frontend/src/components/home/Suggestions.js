import React, { Component } from 'react';
import login3 from './login3.jpg'
import { connect } from 'react-redux';
//import {preferenceAdd} from '../../actions/shopActions';
import axios from 'axios';


export class Suggestions extends Component {

  constructor(props){
    super(props)
    this.state = { preference:'',district:'' }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  handleChangedistrict=(event)=>{this.setState({district :event.target.value});}

  onSubmit=(e)=>{
    e.preventDefault();

     axios
        .post('http://127.0.0.1:5000/preferences', this.state )
        .then((response) => {
            console.log(response)
            if (response.status == 200){
                 alert("Preference saved successfull")
                 this.setState({district :""});
                 this.setState({ preference :""});
                 console.log("preference: ",this.state.preference)
            }
            else {
                alert(response.data)
            }
        })
        .catch(error => {
            alert(error);
        });
    
 
  }
  
  render() {
    
      console.log("login status",this.props.isloggedin)
      return (
        <div className='container'>
                <div className="row">
            <div className="col-md-4 card card-body">
              <img src={login3} className="thumbnail" alt="Poster" />
            </div>
            <div className="col-md-8">

            <div class="card text-white bg-secondary mb-3" style={{maxWwidth: '20rem'}}>
              
                <div class="card-body">
                  <h4 class="card-title">Share your preference.. Stores will notify your needs...</h4>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label for="exampleTextarea" class="form-label mt-4">Preference</label>
                            <input type="text" class="form-control" id="city" 
                            placeholder="Enter your preference" value={this.state.preference} 
                            name = "preference" onChange={this.handleChange} />
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
                        <button type="submit" className="btn btn-primary btn-bg mt-3"   > 
                        Save 
                      </button>
                    </form>
                </div>
              </div>

            
            </div>
          </div>
         
          </div>
      );
    
  }
}



export default Suggestions ;
