import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Gambar2 from '../components/Gambar2';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Gambar2 heading="Contact" text="Lets Talk"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact