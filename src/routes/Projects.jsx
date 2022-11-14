import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Gambar2 from '../components/Gambar2';
import Work from '../components/Work';

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Gambar2 heading="PROJECTS." text="Mini Projects I've created"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects