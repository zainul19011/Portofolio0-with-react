import "./AboutCS.css";
import React from 'react'
import { Link } from "react-router-dom";
import Gambar1 from "/assets/1.jpg"
import Gambar2 from "/assets/react2.webp"

const AboutC = () => {
  return (
    <div className="about">
        <div className="kiri">
            <h1>Who Am I</h1>
            <p>Im a react front-end developer</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="kanan">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Gambar1} className="img"
                    alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Gambar2} className="img"
                    alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutC