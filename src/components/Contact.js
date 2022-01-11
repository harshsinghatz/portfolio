import React from "react";
import Heading from "./Heading";
import "../css/Contact.css";
import Socials from "./Socials";

const Contact = () => {
  return (
    <div className="contact">
      <Heading title="Contact Me" />
      <div className="contact-content">
        <p>Let's connect,</p>
        <p>My inbox is open 24/7</p>
      </div>
      <Socials />
    </div>
  );
};

export default Contact;
