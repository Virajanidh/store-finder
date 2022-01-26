import React, { Component } from 'react';
import { Link , NavLink} from 'react-router-dom';
import myIcon from './Paomedia-Small-N-Flat-Shop.ico'

export class Navbar extends Component {

  render(){
  return (
    <div>


      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h1>Store Finder</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home
            <span class="visually-hidden">(current)</span>
          </a>
        </li>
     
        <Link as={NavLink} className="nav-link" to={'/registershopform'}>
          Register
          
        </Link>


      </ul>
 
    </div>
    <img src ={myIcon} width="96" height="95" />
  </div>
</nav>
    </div>
  );
}

}

export default Navbar;

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