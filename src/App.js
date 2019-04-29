import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    data:[]
  };

  componentDidMount() {
    axios.get(`/API/CONTENTLISTINGPAGE-PAGE1.json`)
      .then(res => {
         const data = res.data;
        this.setState({ data : data.content });
        //console.log(this.state.data[0].image);
      })
  }

  render() {
    return(
      <div>
        {this.state.data.length ?  
        (this.state.data.map(pic => ( 
          <React.Fragment>
        <img src={pic.image} alt = {pic.image} />
        </React.Fragment>
        ))) : 
        
        (<img src="#" alt = "not found" />)}
      </div>
    );
  }
}

export default App;
