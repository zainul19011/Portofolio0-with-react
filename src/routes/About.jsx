import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Gambar2 from '../components/Gambar2';
import AboutC from '../components/AboutC';
const About = () => {
  return (
    <div>
      <Navbar/>
      <Gambar2 heading="About" text="Im a student Front-end Developer"/>
      <AboutC/>
      <Footer/>
    </div>
  )
}

export default About