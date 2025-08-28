"use client";

import React, { useState, useEffect } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./page.css";
import { professionalCoursesApplication } from "@/utils/data";

const ApplicationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [customMessage, setCustomMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("course");
    const course = professionalCoursesApplication[courseId];
    if (course) {
      setSelectedCourse(course);
    }
  }, []);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleMessageChange = (e) => {
    setCustomMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-state">
        <CheckCircleOutlineIcon className="icon success" />
        <h2>Application received!</h2>
        <p>
          Thanks for applying for the{" "}
          <strong>
            {selectedCourse ? selectedCourse.title : "the course"}
          </strong>
          . We’ll contact you <strong>by email</strong> shortly with next steps
          and instructions.
        </p>
      </div>
    );
  }

  return (
    <main className="courses-apply">
      <div className="application-container">
        <div className="notice">
          <InfoOutlinedIcon className="icon info" />
          <p>
            After you submit, we’ll reach out <strong>via email</strong> with
            further details, timelines, and instructions.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Personal Information</h2>
          <div className="grid-2">
            <div className="form-group">
              <label>Prefix *</label>
              <select
                required
                onChange={(e) => handleChange("prefix", e.target.value)}
              >
                <option value="">Select</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Ms</option>
                <option>Dr</option>
              </select>
            </div>
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                required
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Surname *</label>
              <input
                type="text"
                required
                onChange={(e) => handleChange("surname", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Telephone Number *</label>
              <input
                type="tel"
                placeholder="+234..."
                required
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          <h2>{selectedCourse ? selectedCourse.title : "Course"}</h2>
          <p>
            {selectedCourse
              ? selectedCourse.fullDesc
              : "Please select a course."}
          </p>

          {selectedCourse &&
            selectedCourse.fields.map((field, idx) => (
              <div className="form-group" key={idx}>
                <label>{field.label}</label>
                {field.type === "text" && (
                  <input
                    type="text"
                    required
                    onChange={(e) => handleChange(field.label, e.target.value)}
                  />
                )}
                {field.type === "number" && (
                  <input
                    type="number"
                    required
                    onChange={(e) => handleChange(field.label, e.target.value)}
                  />
                )}
                {field.type === "radio" && (
                  <div className="radio-group">
                    {field.options.map((opt) => (
                      <label key={opt} className="radio-item">
                        <input
                          type="radio"
                          name={field.label}
                          value={opt}
                          onChange={() => handleChange(field.label, opt)}
                        />
                        <span className="radio-label">{opt}</span>
                      </label>
                    ))}
                  </div>
                )}
                {field.type === "select" && (
                  <select
                    required
                    onChange={(e) => handleChange(field.label, e.target.value)}
                  >
                    <option value="">Select</option>
                    {field.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                )}
              </div>
            ))}

          <h2>Custom Message</h2>
          <textarea
            rows="4"
            placeholder="Please provide any additional context or questions about the course."
            value={customMessage}
            onChange={handleMessageChange}
          />

          <h2>Declaration</h2>
          <div className="form-group checkbox">
            <label>
              <input type="checkbox" required /> I hereby confirm that the
              information provided above is true and accurate to the best of my
              knowledge.
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
};

export default ApplicationPage;
