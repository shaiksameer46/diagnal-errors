import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class Info extends Component {
    state = { 
      number:this.props.match.params.id,
      data:[]
     }
 


     componentDidMount() {
        axios.get(`/API/CONTENTLISTINGPAGE-PAGE${this.state.number}.json`)
          .then(res => {
             const data = res.data;
            this.setState({ data : data.content });
            console.log(this.props.match.params.id);
          })
          
      }

    render() { 
        if(!this.props.match.params.id){
           this.setState({ number : "1" });
        }
        return ( 
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
         );
    }
}
 
export default Info;