import "./GambarG2.css"
import React, { Component } from 'react'

class Gambar2 extends Component {
    render(){
  return (
    <div className="gambar">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
    </div>
  )
}
}
export default Gambar2