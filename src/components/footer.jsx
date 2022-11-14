import "./footerStyle.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="kiri">
                <div className="lokasi">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}} />
                    <div>
                        <p>Lhokseumawe,Aceh,Indonesia</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>08-21000-0004</h4>
                </div>
                <div className="emai">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>zainul@gmail.com</h4>
                </div>
            </div>
            <div className="kanan">
                <div className="sosmed">
                <a href="https://www.instagram.com/zainl_23/">
                <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
                <a href="https://github.com/zainul19011">
                <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
                <a href="https://www.linkedin.com/in/zainul-anwar-adi-putra-5872a7240/">
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer