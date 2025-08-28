"use client";
import React, { useState, useEffect } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./page.css";

const services = {
  capitalFunding: {
    title: "Capital Funding & Structuring",
    fields: [
      {
        label: "Primary Goal",
        type: "radio",
        options: [
          "Raise Capital",
          "Structure Investment Opportunities",
          "Optimize Capital Allocation",
          "Other",
        ],
      },
      {
        label: "Investment Focus",
        type: "radio",
        options: ["Equity", "Debt", "Quasi-equity", "Mixed"],
      },
      {
        label: "Timeline for Fundraising",
        type: "select",
        options: ["3-6 Months", "6-12 Months", "12+ Months"],
      },
    ],
  },
  portfolioDiversification: {
    title: "Portfolio Diversification",
    fields: [
      {
        label: "Current Portfolio Allocation",
        type: "text",
      },
      {
        label: "Risk Tolerance",
        type: "radio",
        options: ["Low", "Medium", "High"],
      },
      {
        label: "Desired Outcome",
        type: "text",
      },
    ],
  },
  accountingCompliance: {
    title: "Accounting & Compliance Advisory",
    fields: [
      { label: "Government or Agency", type: "text" },
      {
        label: "Service Type",
        type: "radio",
        options: ["Financial Advisory", "Accounting Services", "Compliance"],
      },
    ],
  },
};

const ApplicationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  const [customMessage, setCustomMessage] = useState("");

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
          Thanks for applying for the Financial Advisory Service. We’ll contact
          you <strong>by email</strong> shortly with next steps and
          instructions.
        </p>
      </div>
    );
  }

  return (
    <main className="fad-apply">
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
              <label>Middle Name</label>
              <input
                type="text"
                onChange={(e) => handleChange("middleName", e.target.value)}
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
              <label>Gender *</label>
              <select
                required
                onChange={(e) => handleChange("gender", e.target.value)}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Date of Birth (DD/MM/YYYY) *</label>
              <input
                type="date"
                required
                onChange={(e) => handleChange("dob", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Residential Address *</label>
              <input
                type="text"
                required
                onChange={(e) => handleChange("address", e.target.value)}
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
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>

          <h2>Service Required</h2>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange(
                    "serviceCapitalFunding",
                    !formData.serviceCapitalFunding
                  )
                }
              />
              Capital Funding & Structuring
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange(
                    "servicePortfolioDiversification",
                    !formData.servicePortfolioDiversification
                  )
                }
              />
              Portfolio Diversification
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange(
                    "serviceAccountingCompliance",
                    !formData.serviceAccountingCompliance
                  )
                }
              />
              Accounting & Compliance Advisory
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange("serviceOthers", !formData.serviceOthers)
                }
              />
              Others
            </label>
          </div>

          <h2>Custom Message</h2>
          <textarea
            rows="4"
            placeholder="Please provide details about your selected services, or if you selected 'Others', specify your request."
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
