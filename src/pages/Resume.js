import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import "../App.css"; // Ensure styling is applied

const Resume = () => {
  const resumeRef = useRef();
  const { name, email, objective, experience, education, skills } = useSelector((state) => state.auth.userDetails || {});

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
  });

  return (
    <div className="resume-wrapper">
      <div className="resume-container" ref={resumeRef}>
        <h2 className="resume-title">My Resume</h2>

        <div className="resume-section">
          <h3>Name:</h3>
          <p>{name || "Not provided"}</p>
        </div>

        <div className="resume-section">
          <h3>Email:</h3>
          <p>{email || "Not provided"}</p>
        </div>

        <div className="resume-section">
          <h3>Objective:</h3>
          <p>{objective || "Not provided"}</p>
        </div>

        <div className="resume-section">
          <h3>Experience:</h3>
          <p>{experience || "Not provided"}</p>
        </div>

        <div className="resume-section">
          <h3>Education:</h3>
          <p>{education || "Not provided"}</p>
        </div>

        <div className="resume-section">
          <h3>Skills:</h3>
          <p>{skills || "Not provided"}</p>
        </div>
      </div>

      <button className="download-btn" onClick={handlePrint}>
        Download PDF
      </button>
    </div>
  );
};

export default Resume;
