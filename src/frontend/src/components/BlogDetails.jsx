import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./blogdetails.css";

const BlogDetails = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // References for each section
  const selectionProcessRef = useRef(null);
  const syllabusRef = useRef(null);
  const eligibilityCriteriaRef = useRef(null);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!blog) {
    return <p>Blog details not found.</p>;
  }

  return (
    <div className="blog-details-container">
      <h2 className="blog-title">{blog.title}</h2>

      {/* Display content images */}
      <div className="content-images">
        {blog.contentImages.map((image, index) => (
          <img key={index} src={image} alt={`content-${index}`} className="content-image" />
        ))}
      </div>

      {/* Sidebar menu below the image */}
      <div className="side-menu">
        <button onClick={() => scrollToSection(selectionProcessRef)}>Selection Process</button>
        <button onClick={() => scrollToSection(syllabusRef)}>Syllabus</button>
        <button onClick={() => scrollToSection(eligibilityCriteriaRef)}>Eligibility Criteria</button>
      </div>

      {/* Main Content */}
      <div className="details-content">
        {/* Selection Process */}
        <section ref={selectionProcessRef} className="content-section">
          <h3>Selection Process</h3>
          <p><strong>Written Test:</strong></p>
          <p>General Studies Marks: {blog.selectionProcess.writtenTest.generalStudiesMarks}</p>
          <p>Aptitude Marks: {blog.selectionProcess.writtenTest.aptitudeMarks}</p>
          <p>Total Marks: {blog.selectionProcess.writtenTest.totalMarks}</p>
          <p>Duration: {blog.selectionProcess.writtenTest.duration}</p>
          <p><strong>Interview:</strong> {blog.selectionProcess.interview.description}</p>
        </section>

        {/* Syllabus */}
        <section ref={syllabusRef} className="content-section">
          <h3>Syllabus</h3>
          <p><strong>General Studies Topics:</strong> {blog.syllabus.generalStudiesTopics}</p>
          <p><strong>Mental Ability Topics:</strong> {blog.syllabus.mentalAbilityTopics}</p>
        </section>

        {/* Eligibility Criteria */}
        <section ref={eligibilityCriteriaRef} className="content-section">
          <h3>Eligibility Criteria</h3>
          <p><strong>Nationality:</strong> {blog.eligibilityCriteria.nationality}</p>
          <p><strong>Education:</strong> {blog.eligibilityCriteria.education}</p>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;
