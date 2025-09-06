"use client";

import React, { useState, useEffect } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./page.css";
import { useCreateSsmApplicationMutation } from "@/features/api/applicationApi";

const ApplicationPage = () => {
  const [formData, setFormData] = useState({});
  const [submit, { isLoading, data: submittedData }] =
    useCreateSsmApplicationMutation();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submit(formData);
  };

  if (submittedData) {
    return (
      <div className="success-state">
        <CheckCircleOutlineIcon className="icon success" />
        <h2>Application received!</h2>
        <p>
          Thanks for applying for the Stocks and Shares Management service.
          We’ll contact you <strong>by email</strong> shortly with next steps
          and instructions.
        </p>
      </div>
    );
  }

  return (
    <main className="ssm-apply">
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
                    "serviceDematerialization",
                    !formData.serviceDematerialization
                  )
                }
              />
              Dematerialization
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange("serviceDividends", !formData.serviceDividends)
                }
              />
              Recovery of Outstanding and Unclaimed Dividends
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange(
                    "serviceConsolidation",
                    !formData.serviceConsolidation
                  )
                }
              />
              Consolidation of Shares
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange("serviceCSCS", !formData.serviceCSCS)
                }
              />
              Creation of CSCS Accounts
            </label>
            <div className="form-group">
              <label>Others (please specify):</label>
              <input
                type="text"
                onChange={(e) => handleChange("otherService", e.target.value)}
              />
            </div>
          </div>

          <h2>Declaration</h2>
          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleChange(
                    "declarationConfirmed",
                    !formData.declarationConfirmed
                  )
                }
                required
              />{" "}
              I hereby confirm that the information provided above is true and
              accurate to the best of my knowledge.
            </label>
          </div>

          <button type="submit" className="submit-btn">
            {isLoading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default ApplicationPage;
