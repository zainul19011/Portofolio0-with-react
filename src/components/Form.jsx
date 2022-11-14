import "./FormStyle.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <textarea rows="6" placeholder="Type your massage"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form