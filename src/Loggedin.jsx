import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import './App.css';

class Loggedin extends Component {

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
              <a className="nav-link active" style = {{color:	'#ffff00'}}>Loggedin as sameer</a>
            </li>
          </ul>
          </nav>
      </React.Fragment>
    );
  }
}

export default Loggedin;
