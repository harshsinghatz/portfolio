import React from "react";
import "../css/Heading.css";

const Heading = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="heading">{title}</h2>
      {subtitle ? <span className="sub-header">{subtitle}</span> : null}
    </div>
  );
};

export default Heading;
