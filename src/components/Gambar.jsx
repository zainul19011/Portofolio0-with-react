import "./GambarG.css";
import React from 'react'
import headerImg from "/assets/header.webp"

const Gambar = () => {
  return (
    <div className="gambar">
        <div className="mask">
            <img className="header-img" src={headerImg} alt="headerImg"/>
        </div>
        <div className="content">
            <p>HI,I'M A STUDENT</p>
            <h1>React JS.</h1>
        </div>
    </div>
  )
}

export default Gambar