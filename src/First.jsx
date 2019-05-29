import React, { Component } from 'react';
import axios from "axios";
import { Route, Switch, Link} from 'react-router-dom';
import './App.css';

class First extends Component {
    state = { 
      data:[]
     }
 


     componentDidMount() {
        axios.get(`/API/CONTENTLISTINGPAGE-PAGE1.json`)
          .then(res => {
             const data = res.data;
            this.setState({ data : data.content });
            console.log(this.props.match.params.id);
          })
          
      }

    render() { 
        return ( 
          <React.Fragment>
            <div className="row">
              {this.state.data.length ? (
                this.state.data.map(pic => (
                  <div className="txtstyle">
                    <img src={pic.image} alt={pic.image} />
                    <p>{pic.name}</p>
                  </div>
                ))
              ) : (
                  <img src="#" alt="not found" />
                )}
            </div>

            <div className="row">
              <div className="col xs-6-push layout">
                <ul className="pagination">
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
 
export default First;
