import React, { Component } from 'react';
import Info from "./Info";
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div id="overlay-container">
        <Switch>
          <Route
            path="/:id"
            render={props => <Info {...props} />}
          />
        </Switch>
        </div>
        
        <div className="row">
          <div className="col xs-6-push layout">
            <ul class="pagination">
              <li>
                <Link className="active" to="1">
                  1
                </Link>
              </li>
              <li>
                <Link to="2">2</Link>
              </li>
              <li>
                <Link to="3">3</Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
