import React, { Component } from 'react';
import Slider from '@material-ui/core/Slider';
import './components.css';
const axios = require("axios").default;

export class Section extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(num) {
    this.props.urls.map((value, index) => {
      let url = value + "/hue?hue=" + num;
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
    })
  }

  onChangeCommitted = (event, newValue) => {
    this.handleClick(newValue)
  };

  render() {
    return (
      <div className="flex">
        <div onClick={() => this.handleClick(0)} className="button" > Runway </div>
        <div onClick={() => this.handleClick(255)} className="button" > Twinkle </div>
        <Slider
          // value={0}
          onChange={this.onChangeCommitted}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          style={sliderStyle}
          min={1}
          max={254}
        />
      </div>
    )
  }
}

export default Section

const sliderStyle = {
  width: '200px',
  margin: '10px'
}