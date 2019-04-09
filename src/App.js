import React, { Component } from 'react';
import axios from "axios";
import poster1 from './Slices/poster1.jpg';
import './App.css';
class App extends Component {

  state = {
    data : {},
    text : "./Slices/poster2.jpg"

  };

  componentDidMount() {
    axios.get(`./API/CONTENTLISTINGPAGE-PAGE1.json`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
        this.setState({ text : this.state.data.page.contents.content[0].image})
        console.log(this.state.text);
      })
  }

  render() {
    
    return (
      <img src={poster1} alt="poster1.jpg"/>
    );
  }
}

export default App;
