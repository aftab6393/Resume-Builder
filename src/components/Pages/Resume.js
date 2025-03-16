import { useReactToPrint } from "react-to-print";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./Resume.css"; // Import custom CSS for styling

const Resume = () => {
  const resumeRef = useRef(); // Reference for printing

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
    documentTitle: "My_Resume",
  });

  return (
    <div className="resume-wrapper">
      {/* Resume Content */}
      <div className="resume-container" ref={resumeRef}>
        {/* Header Section */}
        <div className="resume-header">
          <h1>John Doe</h1>
          <p>Email: john.doe@example.com | Phone: +1234567890</p>
          <p>LinkedIn: linkedin.com/in/johndoe</p>
        </div>

        {/* Summary / Objective */}
        <div className="resume-section">
          <h2>Objective</h2>
          <p>
            A highly motivated software engineer with a passion for developing
            scalable web applications and working with modern technologies like
            React, Redux, and Firebase.
          </p>
        </div>

        {/* Experience Section */}
        <div className="resume-section">
          <h2>Experience</h2>
          <div className="resume-item">
            <h3>Software Engineer - XYZ Company</h3>
            <p className="date">Jan 2022 - Present</p>
            <ul>
              <li>Developed React applications with Firebase authentication.</li>
              <li>Implemented Redux for state management.</li>
              <li>Optimized performance and improved UI/UX.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h3>Intern - ABC Tech</h3>
            <p className="date">Jun 2021 - Dec 2021</p>
            <ul>
              <li>Assisted in frontend development using React.</li>
              <li>Worked on API integration and debugging.</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Bachelor of Technology in Computer Science</h3>
            <p className="date">2018 - 2022</p>
            <p>ABC University, India</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>React.js</li>
            <li>Redux</li>
            <li>Firebase</li>
            <li>JavaScript</li>
            <li>CSS & Tailwind</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>

      {/* Download PDF Button */}
      <button className="download-btn" onClick={handlePrint}>
        Download PDF
      </button>
    </div>
  );
};

export default Resume;
