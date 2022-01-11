import React from "react";
import Heading from "./Heading";
import "../css/Education.css";

const Education = () => {
  return (
    <div className="education">
      <Heading title="Education" />
      <div className="college">
        <div className="info">
          <h3 className="qualification">
            Bachelor's Degree in Information Technology
          </h3>
          <p className="university">Mumbai University</p>
        </div>
        <p className="timeline">2019 - 2023</p>
      </div>
    </div>
  );
};

export default Education;
