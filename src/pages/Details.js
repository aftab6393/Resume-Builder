import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateUserDetails } from "../redux/authSlice";
import "../App.css"; // Ensure styles are applied

const Details = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    objective: "",
    experience: "",
    education: "",
    skills: "",
  });

  const handleUpdate = () => {
    if (!details.name || !details.email || !details.objective || !details.experience || !details.education || !details.skills) {
      toast.error("All fields must be completed!");
      return;
    }
    dispatch(updateUserDetails(details)); // Save details in Redux
    toast.success("Resume updated successfully.");
  };

  return (
    <div className="details-container">
      <h2 className="details-title">Enter Your Details</h2>
      <div className="details-form">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" onChange={(e) => setDetails({ ...details, name: e.target.value })} />
        
        <label>Email:</label>
        <input type="email" placeholder="Your Email" onChange={(e) => setDetails({ ...details, email: e.target.value })} />

        <label>Objective:</label>
        <textarea placeholder="Your Objective" onChange={(e) => setDetails({ ...details, objective: e.target.value })}></textarea>
        
        <label>Experience:</label>
        <textarea placeholder="Your Experience" onChange={(e) => setDetails({ ...details, experience: e.target.value })}></textarea>
        
        <label>Education:</label>
        <textarea placeholder="Your Education" onChange={(e) => setDetails({ ...details, education: e.target.value })}></textarea>
        
        <label>Skills:</label>
        <textarea placeholder="Your Skills" onChange={(e) => setDetails({ ...details, skills: e.target.value })}></textarea>

        <button className="update-btn" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Details;
