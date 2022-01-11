import React from "react";
import Heading from "./Heading";
import "../css/Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <Heading title="Skills" subtitle="Tech I'm familiar with" />
      <ul className="technologies">
        <li className="techlist">
          <i className="fab fa-html5"></i> HTML
        </li>
        <li className="techlist">
          <i className="fab fa-css3-alt"></i> CSS
        </li>
        <li className="techlist">
          <i className="fab fa-js-square"></i> JavaScript
        </li>
        <li className="techlist">
          <i className="fab fa-react"></i>React
        </li>
        <li className="techlist">
          <i className="fab fa-git-alt"></i> Git
        </li>
        <li className="techlist">
          <span className="iconify" data-icon="cib:flask"></span> Flask
        </li>
        <li className="techlist">
          <i className="fab fa-python"></i> Python
        </li>
      </ul>
    </div>
  );
};

export default Skills;
