import React from "react";
import Socials from "./Socials";
import "../css/About.css";
import Heading from "./Heading";
const About = () => {
  return (
    <>
      <div className="about">
        <Heading title="About Me" />
        <p className="about-content">
          Hello there, My name is <strong>Harsh Singh</strong>. I am from India.
          I am very passionate about Web development and Software Development. I
          love writing articles and blogs about the technologies i am interested
          in.
        </p>
        <Socials />
      </div>
    </>
  );
};

export default About;
