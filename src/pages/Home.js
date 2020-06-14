import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
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

  handleClick(num) {
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

  onChangeCommitted = (event, newValue) => {
    this.handleClick(newValue)
  };

  render() {
    return (
      <div className="flex">
        <div onClick={() => this.handleClick(0)} className="button" > Runway </div>
        <Slider
        // value={0}
          onChange={this.onChangeCommitted}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          style={sliderStyle}
          min={1}
          max={255}
        />
      </div>
    )
  }
}

export default Home

const sliderStyle = {
  width: '200px',
  margin: '10px'
}