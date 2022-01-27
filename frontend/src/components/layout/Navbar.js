import React, { Component } from 'react';
import { Link , NavLink} from 'react-router-dom';
import myIcon from './Paomedia-Small-N-Flat-Shop.ico'
import { connect } from 'react-redux';

export class Navbar extends Component {


  render(){
    const {isSuccessfullregister} = this.props
  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <div class="container-fluid">
          <a class="navbar-brand" href="#"><h1>Store Finder</h1></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="/">
                  <h5>Home</h5>
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
          
              <Link as={NavLink} className="nav-link" to={'/registrationControl'}>
              <h5> {isSuccessfullregister ? "Hi  "+this.props.data.name : "Register" } </h5>
                
              </Link>
              <Link as={NavLink} className="nav-link" to={'/loginLogoutControl'}>
              <h5> {this.props.isloggedin ? "Hii " : "Log In" } </h5>
              </Link>
              

            </ul>
      
          </div>
          <Link className="btn btn-primary" to={'/suggestions'}>
        Put your suggestions
        </Link>
          <img  src ={myIcon} width="96" height="95" />
        </div>
      </nav>
    </div>
  );
}

}

//export default Navbar;
const mapStateToProps = state => ({
  isSuccessfullregister: state.shopOwner.isSuccessfullregister,
  data : state.shopOwner.data,
  isloggedin : state.shopOwner.isloggedin
});

export default connect(
  mapStateToProps,
)(Navbar);

/*

      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Store Finder
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li>
            <Link className="nav-item" to="/registershopform">
              Register your shop
            </Link>
            </li>
            <li className="nav-item d-inline-block mr-4">
            <img src ={myIcon} width="96" height="95" />
            </li>
          </ul>
        </div>
      </nav>
*/