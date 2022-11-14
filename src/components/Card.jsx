import "./CardStyle.css"
import React from 'react'
const Card = (props) => {
  return (
            <div className="project-card">
                <img src={props.imgsrc} alt="gambar"/>
                <h2 className="judul">{props.judul}</h2>
                <div className="detail">
                    <p>{props.text}</p></div>
            </div>
    )
}

export default Card