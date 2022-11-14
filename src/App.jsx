import {Routes, Route, Link} from "react-router-dom"
import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Blog from "./routes/Blog";
import BlogDetail from "./routes/BlogDetail";
import "./index.css"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route path="/project" element={<Projects />}/>
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:id" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
