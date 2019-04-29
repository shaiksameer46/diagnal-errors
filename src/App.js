import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    data:{}
  };

  componentDidMount() {
    axios.get(`/API/CONTENTLISTINGPAGE-PAGE1.json`)
      .then(res => {
         const data = res.data;
        this.setState({ data : data.content });
        console.log(this.state.data[0].image);
      })
  }

  render() {
    console.log(this.state.data[0].image);
    return (
      <img src = "/Slices/Poster1.jpg" alt = "poster1" />
    );
  }
}

export default App;
