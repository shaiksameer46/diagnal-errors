import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Navbar extends Component {

  render() {
    
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navspace mb-5">
            <Link class="navbar-brand ml-5" to="Login">
               <img src="logoimage.png" width="40" height="35" class="d-inline-block align-top" alt="" />
                 Diagnal
            </Link>
        <ul className="nav justify-content-end mr-5">
           <li className="nav-item">
              <Link className="nav-link active" to="Login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="signup">Signup</Link>
             </li>
          </ul>
          </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
