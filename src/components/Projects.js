import React from "react";
import Heading from "./Heading";
import { projects } from "../data/projects.js";
import "../css/Projects.css";

const Projects = () => {
  console.log(projects);
  const rendererdProjects = projects.map((project) => {
    return (
      <li className="project" key={project.id}>
        <img
          className="project-img"
          src={project.imageLink}
          alt="project cover photo"
        />
        <div className="project-info">
          <p className="links">
            <a className="link" href={project.link} target="_blank">
              Live project
            </a>
            <a className="link" href={project.githubLink} target="_blank">
              Github Link
            </a>
          </p>
          <h3 className="title">{project.title}</h3>
        </div>
      </li>
    );
  });
  return (
    <div className="projects">
      <Heading title="Projects" />
      <ul className="project-list">{rendererdProjects}</ul>
    </div>
  );
};

export default Projects;
