import React, { Component } from 'react';
import Info from "./Info";
import First from "./First";
import { Route, Switch, Link} from 'react-router-dom';
import Login from "./Login";
import './App.css';
import Navbar from "./Navbar";

class App extends Component {

  render() {
    //console.log(this.props.match.params.id);
    return (
      <React.Fragment>
        <div id="overlay-container">
          <Switch>
            <Route
              path="/Login"
              component={Login}
            />
            <Route path="/:id"
              render={props => <Info {...props} />
              }
            />
            <Route
              path="/"
              component={Login}
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
  
}

export default App;

