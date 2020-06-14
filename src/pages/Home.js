import React, { Component } from 'react'
import './pages.css';
const axios = require("axios").default;

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // color1: 
      hue: 0
    };
  }

  handleClick(num){
    let url = "http://micropenis1.local:8000/hue?hue=" + num;
    axios
      .get(
        url
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(num)
  }

  render() {
    return (
      <div className="flex">
        <div onClick={() => this.handleClick(0)} className="button" > 0 </div>
        <div onClick={() => this.handleClick(145)} className="button" > 145 </div>
      </div>
    )
  }
}

export default Home
