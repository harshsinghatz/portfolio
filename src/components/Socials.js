import React from "react";
import "../css/Socials.css";

const Socials = () => {
  return (
    <div>
      <div className="socials">
        <a className="social-link" href="#">
          <i className="fa fa-twitter"></i>
        </a>
        <a className="social-link" href="#">
          <i className="fa fa-linkedin"></i>
        </a>
        <a className="social-link" href="#">
          <i className="fa fa-github"></i>
        </a>
        <a className="social-link" href="#">
          <i className="fa fa-codepen"></i>
        </a>
        <a className="social-link" href="#">
          <span className="iconify" data-icon="simple-icons:hashnode"></span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
