import "./CardStyle.css";
import WorkData from "./WorkData";
import Card from "./Card";
import React from 'react';

const Work = () => {
  return (
    <div className="card-container">
        <h1 className="project-heading">Project</h1>
        <div className="project-container">
        {WorkData.map((val,ind)=>{
            return(
                <Card
                key={ind}
                imgsrc={val.imgsrc}
                judul={val.judul}
                text={val.text}
                />
            )
        })}
        </div>
    </div>
  )
}

export default Work