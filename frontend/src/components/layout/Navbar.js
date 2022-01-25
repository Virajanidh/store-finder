import React from 'react';
import { Link } from 'react-router-dom';
import myIcon from './Paomedia-Small-N-Flat-Shop.ico'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/">
              Store Finder
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
            <img src ={myIcon} width="96" height="95" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
