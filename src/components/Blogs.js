import React from "react";
import Heading from "./Heading";
import { blogs } from "../data/blogs.js";
import "../css/Blogs.css";
const Blogs = () => {
  const rendererdBlogs = blogs.map((blog) => {
    return (
      <li className="blog" key={blog.id}>
        <a className="blog-link" target="_blank" href={blog.link}>
          <img
            className="blog-img"
            src={blog.imageLink}
            alt="blog cover photo"
          />
          <div className="blog-info">
            <p className="published-date">{blog.date}</p>
            <h3 className="title">{blog.title}</h3>
          </div>
        </a>
      </li>
    );
  });
  return (
    <div className="blogs">
      <Heading title="Blogs" />
      <ul className="blog-list">{rendererdBlogs}</ul>
    </div>
  );
};

export default Blogs;
