import React, { useEffect, useState } from "react";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./blog.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/blog") // Update with your API endpoint
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="blogs-container">
      <h2 className="blogs-title">Blogs</h2>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog._id} className="blog-card">
            <img src={blog.cardImage} alt={blog.title} className="blog-image" />
            <p
              className="blog-description"
              onClick={() => navigate('/blog', { state: { blog } })}
            >
              {blog.description}
            </p>
            <div className="blog-icons">
              <FaHeart className="like-icon" />
              <FaWhatsapp className="whatsapp-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
