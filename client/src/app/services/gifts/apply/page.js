"use client";

import React, { useState, useEffect } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./page.css";

const giftCategories = {
  festive: {
    title: "Festive Gifts",
    fields: [
      {
        label: "Occasion",
        type: "radio",
        options: ["Christmas", "New Year", "Easter", "Other"],
      },
      {
        label: "Preferred Gift Type",
        type: "select",
        options: [
          "Customized Hampers",
          "Gift Cards",
          "Branded Merchandise",
          "Other",
        ],
      },
    ],
  },
  milestone: {
    title: "Milestone Gifts",
    fields: [
      {
        label: "Milestone Type",
        type: "radio",
        options: ["Anniversary", "Promotion", "Achievement", "Other"],
      },
      {
        label: "Personalized Items",
        type: "text",
      },
    ],
  },
  birthday: {
    title: "Birthday Surprises",
    fields: [
      {
        label: "Recipient's Age",
        type: "select",
        options: ["Under 18", "18-30", "31-50", "51+"],
      },
      {
        label: "Gift Type",
        type: "radio",
        options: ["Personalized Gifts", "Gift Baskets", "Gift Cards"],
      },
    ],
  },
  hampers: {
    title: "Corporate Hampers",
    fields: [
      {
        label: "Preferred Hampers",
        type: "text",
      },
      {
        label: "Branding/Customization Preferences",
        type: "text",
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
          Thanks for applying for our Corporate Gifts Service. We’ll contact you{" "}
          <strong>by email</strong> shortly with next steps and instructions.
        </p>
      </div>
    );
  }

  return (
    <main className="gifts-apply">
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

          <h2>Gift Selection</h2>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange("serviceFestive", !formData.serviceFestive)
                }
              />
              Festive Gifts
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange("serviceMilestone", !formData.serviceMilestone)
                }
              />
              Milestone Gifts
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange("serviceBirthday", !formData.serviceBirthday)
                }
              />
              Birthday Surprises
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange("serviceHampers", !formData.serviceHampers)
                }
              />
              Corporate Hampers
            </label>
          </div>

          {formData.serviceFestive && (
            <>
              <h2>{giftCategories.festive.title} Details</h2>
              <div className="service-section">
                {giftCategories.festive.fields.map((field, idx) => (
                  <div className="form-group" key={idx}>
                    <label>{field.label}</label>
                    {field.type === "text" && (
                      <input
                        type="text"
                        required
                        onChange={(e) =>
                          handleChange(field.label, e.target.value)
                        }
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
                        onChange={(e) =>
                          handleChange(field.label, e.target.value)
                        }
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
            </>
          )}

          {formData.serviceMilestone && (
            <>
              <h2>{giftCategories.milestone.title} Details</h2>
              <div className="service-section">
                {giftCategories.milestone.fields.map((field, idx) => (
                  <div className="form-group" key={idx}>
                    <label>{field.label}</label>
                    <input
                      type="text"
                      required
                      onChange={(e) =>
                        handleChange(field.label, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {formData.serviceBirthday && (
            <>
              <h2>{giftCategories.birthday.title} Details</h2>
              <div className="service-section">
                {giftCategories.birthday.fields.map((field, idx) => (
                  <div className="form-group" key={idx}>
                    <label>{field.label}</label>
                    {field.type === "select" && (
                      <select
                        required
                        onChange={(e) =>
                          handleChange(field.label, e.target.value)
                        }
                      >
                        <option value="">Select</option>
                        {field.options.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
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
                  </div>
                ))}
              </div>
            </>
          )}

          {formData.serviceHampers && (
            <>
              <h2>{giftCategories.hampers.title} Details</h2>
              <div className="service-section">
                {giftCategories.hampers.fields.map((field, idx) => (
                  <div className="form-group" key={idx}>
                    <label>{field.label}</label>
                    <input
                      type="text"
                      required
                      onChange={(e) =>
                        handleChange(field.label, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          <h2>Custom Message</h2>
          <textarea
            rows="4"
            placeholder="Please provide additional details or customization preferences."
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
