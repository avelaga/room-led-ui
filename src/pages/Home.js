import React, { Component } from 'react'
import Section from '../components/Section.js';
import './pages.css';
import '../../dist/stars.png'

export class Home extends Component {
  render() {
    return (
      <div className="container">
        {/* <h1>All</h1>
        <Section urls={["http://micropenis1.local:8000"],["http://micropenis2.local:8000"]}/> */}
        <h1>Wall</h1>
        <Section urls={["http://micropenis1.local"]}/>
        <h1>Closet</h1>
        <Section urls={["http://micropenis2.local"]}/>
      </div>
    )
  }
}

export default Home

const sliderStyle = {
  width: '200px',
  margin: '10px'
}