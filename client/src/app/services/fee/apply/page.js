"use client";

import React, { useState, useEffect } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./page.css";

const courseFields = [
  {
    label: "Main Goal",
    type: "radio",
    options: [
      "Reduce financial stress",
      "Increase financial literacy",
      "Build long-term savings",
      "Prepare for retirement",
      "Improve productivity through financial resilience",
      "Other",
    ],
  },
  {
    label: "Current Experience with Personal Finance",
    type: "radio",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    label: "Preferred Cohort",
    type: "select",
    options: ["September 2025", "November 2025"],
  },
];

const ApplicationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
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
          Thanks for applying to{" "}
          <strong>Financial Empowerment for Employees</strong>. We’ll contact
          you <strong>by email</strong> shortly with next steps and
          instructions.
        </p>
      </div>
    );
  }

  return (
    <main className="fee-apply">
      <div className="application-container">
        <div className="notice">
          <InfoOutlinedIcon className="icon info" />
          <p>
            After you submit, we’ll reach out <strong>via email</strong> with
            further details, timelines, and instructions.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Bio Data</h2>
          <div className="grid-2">
            <div className="form-group">
              <label>First Name *</label>
              <input
                type="text"
                required
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name (optional)</label>
              <input
                type="text"
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                placeholder="+234..."
                required
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Country *</label>
              <select
                required
                onChange={(e) => handleChange("country", e.target.value)}
              >
                <option value="">Select</option>
                <option>Nigeria</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
            <div className="form-group">
              <label>State/City *</label>
              <input
                type="text"
                required
                onChange={(e) => handleChange("city", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Age Range</label>
              <select
                onChange={(e) => handleChange("ageRange", e.target.value)}
              >
                <option value="">Select</option>
                <option>Under 18</option>
                <option>18–24</option>
                <option>25–34</option>
                <option>35–44</option>
                <option>45–54</option>
                <option>55+</option>
              </select>
            </div>
            <div className="form-group">
              <label>Occupation</label>
              <input
                type="text"
                onChange={(e) => handleChange("occupation", e.target.value)}
              />
            </div>
          </div>

          <h2>Program Details</h2>
          <div className="course-section">
            <h3>Financial Empowerment for Employees</h3>
            {courseFields.map((field, idx) => (
              <div className="form-group" key={idx}>
                <label>{field.label}</label>
                {field.type === "text" && (
                  <input
                    type="text"
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
          </div>

          <h2>Custom Message</h2>
          <textarea
            rows="4"
            placeholder="Share any context, constraints, or questions..."
            onChange={(e) => handleChange("message", e.target.value)}
          />

          <div className="form-group checkbox">
            <label>
              <input type="checkbox" required /> I agree to be contacted via the
              email I provided.
            </label>
          </div>
          <div className="form-group checkbox">
            <label>
              <input type="checkbox" required /> I have read and accept the
              privacy notice.
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
