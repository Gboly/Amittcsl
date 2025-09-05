"use client";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./page.css";
import { useState } from "react";
import { useCreateFadApplicationMutation } from "@/features/api/applicationApi";

const services = {
  capitalFunding: {
    title: "Capital Funding & Structuring",
    fields: [
      {
        label: "Primary Goal",
        fieldName: "primaryGoal",
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
        fieldName: "investmentFocus",
        type: "radio",
        options: ["Equity", "Debt", "Quasi-equity", "Mixed"],
      },
      {
        label: "Timeline for Fundraising",
        fieldName: "timeline",
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
        fieldName: "currentPortfolioAllocation",
        type: "text",
      },
      {
        label: "Risk Tolerance",
        fieldName: "riskTolerance",
        type: "radio",
        options: ["Low", "Medium", "High"],
      },
      {
        label: "Desired Outcome",
        fieldName: "desiredOutcome",
        type: "text",
      },
    ],
  },
  accountingCompliance: {
    title: "Accounting & Compliance Advisory",
    fields: [
      {
        label: "Government or Agency",
        fieldName: "governmentOrAgency",
        type: "text",
      },
      {
        label: "Service Type",
        fieldName: "serviceType",
        type: "radio",
        options: ["Financial Advisory", "Accounting Services", "Compliance"],
      },
    ],
  },
};

const ApplicationPage = () => {
  const [formData, setFormData] = useState({});
  const [submit, { data: submittedData }] = useCreateFadApplicationMutation();

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
          Thanks for applying for the Financial Advisory Service. We’ll contact
          you <strong>by email</strong> shortly with next steps.
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
          <h2>Organisation Information</h2>
          <div className="grid-2">
            <div className="form-group">
              <label>Organisation / Business Name *</label>
              <input
                type="text"
                required
                onChange={(e) =>
                  handleChange("organisationName", e.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label>Type of Entity *</label>
              <select
                required
                onChange={(e) => handleChange("entityType", e.target.value)}
              >
                <option value="">Select</option>
                <option>SME</option>
                <option>Corporate Organisation</option>
                <option>Government Agency</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Contact Person *</label>
              <input
                type="text"
                placeholder="Full Name of Contact Person"
                required
                onChange={(e) => handleChange("contactPerson", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Designation / Role *</label>
              <input
                type="text"
                required
                onChange={(e) => handleChange("designation", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Office Address *</label>
              <input
                type="text"
                required
                onChange={(e) => handleChange("officeAddress", e.target.value)}
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
                placeholder="abc@xyz.com"
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Website (if any)</label>
              <input
                type="url"
                placeholder="https://example.com"
                onChange={(e) => handleChange("website", e.target.value)}
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

          {/* Capital Funding Section */}
          {formData.serviceCapitalFunding && (
            <>
              <h2>{services.capitalFunding.title} Details</h2>
              {services.capitalFunding.fields.map((field, idx) => (
                <div className="form-group" key={idx}>
                  <label>{field.label}</label>
                  {field.type === "text" && (
                    <input
                      type="text"
                      onChange={(e) =>
                        handleChange(field.fieldName, e.target.value)
                      }
                    />
                  )}
                  {field.type === "radio" && (
                    <div className="radio-group">
                      {field.options.map((opt) => (
                        <label key={opt} className="radio-item">
                          <input
                            type="radio"
                            name={field.fieldName}
                            value={opt}
                            onChange={() => handleChange(field.fieldName, opt)}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}
                  {field.type === "select" && (
                    <select
                      onChange={(e) =>
                        handleChange(field.fieldName, e.target.value)
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
            </>
          )}

          {/* Portfolio Diversification Section */}
          {formData.servicePortfolioDiversification && (
            <>
              <h2>{services.portfolioDiversification.title} Details</h2>
              {services.portfolioDiversification.fields.map((field, idx) => (
                <div className="form-group" key={idx}>
                  <label>{field.label}</label>
                  {field.type === "text" && (
                    <input
                      type="text"
                      onChange={(e) =>
                        handleChange(field.fieldName, e.target.value)
                      }
                    />
                  )}
                  {field.type === "radio" && (
                    <div className="radio-group">
                      {field.options.map((opt) => (
                        <label key={opt} className="radio-item">
                          <input
                            type="radio"
                            name={field.fieldName}
                            value={opt}
                            onChange={() => handleChange(field.fieldName, opt)}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Accounting & Compliance Section */}
          {formData.serviceAccountingCompliance && (
            <>
              <h2>{services.accountingCompliance.title} Details</h2>
              {services.accountingCompliance.fields.map((field, idx) => (
                <div className="form-group" key={idx}>
                  <label>{field.label}</label>
                  {field.type === "text" && (
                    <input
                      type="text"
                      onChange={(e) =>
                        handleChange(field.fieldName, e.target.value)
                      }
                    />
                  )}
                  {field.type === "radio" && (
                    <div className="radio-group">
                      {field.options.map((opt) => (
                        <label key={opt} className="radio-item">
                          <input
                            type="radio"
                            name={field.fieldName}
                            value={opt}
                            onChange={() => handleChange(field.fieldName, opt)}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {formData.serviceOthers && (
            <div className="form-group">
              <label>Other Service Details</label>
              <textarea
                rows="4"
                placeholder="Please provide details if you selected 'Others'."
                onChange={(e) =>
                  handleChange("otherServiceDetails", e.target.value)
                }
              />
            </div>
          )}

          <div className="form-group">
            <h2>Custom Message</h2>
            <textarea
              rows="4"
              placeholder="Please provide more details about your selected service(s) if any"
              value={formData.customMessage}
              onChange={(e) => handleChange("customMessage", e.target.value)}
            />
          </div>

          <h2>Declaration</h2>
          <div className="form-group checkbox">
            <label>
              <input type="checkbox" required /> I hereby confirm that the
              information provided above is true and accurate.
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
