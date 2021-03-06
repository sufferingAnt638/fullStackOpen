import React, { useState } from "react";
import PropTypes from "prop-types";

const Blog = ({ blog, like, del, user }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };
  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };
  const showed = { display: visible ? "" : "none" };
  const hidden = { display: visible ? "none" : "" };
  return (
    <div style={blogStyle} id={`${blog.title}`}>
      <div style={hidden}>
        {blog.title} by {blog.author}
        <button onClick={handleVisibility} id="view">
          view
        </button>
      </div>
      <div style={showed} id="info">
        {blog.title} by {blog.author}{" "}
        <button onClick={handleVisibility}>hide</button>
        <br />
        {blog.url} <br />
        likes:{blog.likes} <button onClick={like}>like</button> <br />
        Created by: {blog.user.username}
        <div style={{ display: blog.user.username === user ? "" : "none" }}>
          <button onClick={del}>remove</button>
        </div>
      </div>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  like: PropTypes.func.isRequired,
  del: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};
export default Blog;
