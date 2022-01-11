import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Blogs from "./components/Blogs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Home />
        <About />
        <Skills />
        <Education />
        <Blogs />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
