import React, { Component } from 'react';
import login2 from './login2.png'
import { connect } from 'react-redux';
import {login} from '../../actions/shopActions';


export class Loginform extends Component {

  constructor(props){
    super(props)
    this.state = { name:'',  password:'' }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  onSubmit=(e)=>{
    e.preventDefault();
    console.log('form submitted')
    this.props.login(this.state);
  }
  
  render() {
    
      console.log("login status",this.props.isloggedin)
      return (
        <div className='container'>
                <div className="row">
            <div className="col-md-4 card card-body">
              <img src={login2} className="thumbnail" alt="Poster" />
            </div>
            <div className="col-md-8">

            <div class="card text-white bg-success mb-3" style={{maxWwidth: '20rem'}}>
              
                <div class="card-body">
                  <h4 class="card-title">Log In</h4>
                  <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                      <label class="form-label mt-4">Email Address</label>
                      <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" 
                        placeholder="name@example.com" name = "email" onChange={this.handleChange}/>
                      </div>
                      <label class="form-label mt-4">Password</label>
                      <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" 
                        placeholder="Password" name = "password" onChange={this.handleChange}/>
                      </div>
                      <button type="submit" className="btn btn-primary btn-bg mt-3"   > 
                        Log In 
                      </button>

                    </div>
                  </form>

                </div>
              </div>
  
            
            </div>
          </div>
          <p class="text-warning" id='errormsg'>{this.props.error_msg}</p> 
          </div>
      );
    
  }
}

const mapStateToProps = state => ({
  isloggedin : state.products.isloggedin,
  error_msg : state.products.error_msg
});

export default connect(mapStateToProps,
  {login}
  )(Loginform);
