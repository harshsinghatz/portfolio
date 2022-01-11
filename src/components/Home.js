import React from "react";
import Image from "../images/harsh.jpg";
import Typewriter from "typewriter-effect";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        src={Image}
        className="image"
        alt="harsh singh portrait"
        loading="lazy"
      />
      <div className="about--section">
        <h1>Hey, I'm Harsh Singh,</h1>
        <h2 className="typewriter--text">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a Front-end developer")
                .pauseFor(2500)
                .start();
            }}
          />
        </h2>
      </div>
    </div>
  );
};

export default Home;
