"use client";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./page.css";
import { useState } from "react";
import { useCreateSppApplicationMutation } from "@/features/api/applicationApi";

const services = {
  sourcingVendor: {
    title: "Sourcing & Vendor Selection",
    fields: [
      {
        label: "Primary Requirement",
        fieldName: "primaryRequirement",
        type: "text",
      },
      {
        label: "Category of Product/Service Needed",
        fieldName: "categoryOfProduct",
        type: "select",
        options: [
          "Office Supplies",
          "Specialized Equipment",
          "Bulk Supplies",
          "Other",
        ],
      },
      {
        label: "Preferred Supplier Type",
        fieldName: "preferredSupplierType",
        type: "radio",
        options: ["Local", "International", "No Preference"],
      },
    ],
  },
  procurementManagement: {
    title: "Procurement Management",
    fields: [
      {
        label: "Project Timeline",
        fieldName: "projectTimeline",
        type: "select",
        options: ["1 Month", "3 Months", "6 Months", "Other"],
      },
      {
        label: "Preferred Delivery Method",
        fieldName: "preferredDeliveryMethod",
        type: "radio",
        options: ["Standard Delivery", "Express Delivery"],
      },
    ],
  },
  negotiationCost: {
    title: "Negotiation & Cost Optimization",
    fields: [
      {
        label: "Estimated Budget",
        fieldName: "estimatedBudget",
        type: "text",
      },
      {
        label: "Price Range Considerations",
        fieldName: "priceRangeConsiderations",
        type: "text",
      },
    ],
  },
};

const ApplicationPage = () => {
  //const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({});
  //const [customMessage, setCustomMessage] = useState("");

  const [submit, { isLoading: savingProgress, data: submittedData }] =
    useCreateSppApplicationMutation();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // const handleMessageChange = (e) => {
  //   setCustomMessage(e.target.value);
  // };

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
          Thanks for applying for our Supply & Procurement Service. We’ll
          contact you <strong>by email</strong> shortly with next steps and
          instructions.
        </p>
      </div>
    );
  }

  return (
    <main className="spp-apply">
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

          <h2>Service Required</h2>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange(
                    "serviceSourcingVendor",
                    !formData.serviceSourcingVendor
                  )
                }
              />
              Sourcing & Vendor Selection
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange(
                    "serviceProcurementManagement",
                    !formData.serviceProcurementManagement
                  )
                }
              />
              Procurement Management
            </label>
            <label>
              <input
                type="checkbox"
                onChange={() =>
                  handleChange(
                    "serviceNegotiationCost",
                    !formData.serviceNegotiationCost
                  )
                }
              />
              Negotiation & Cost Optimization
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

          {formData.serviceSourcingVendor && (
            <>
              <h2>{services.sourcingVendor.title} Details</h2>
              <div className="service-section">
                {services.sourcingVendor.fields.map((field, idx) => (
                  <div className="form-group" key={idx}>
                    <label>{field.label}</label>
                    {field.type === "text" && (
                      <input
                        type="text"
                        required
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
                              onChange={() =>
                                handleChange(field.fieldName, opt)
                              }
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
              </div>
            </>
          )}

          {formData.serviceProcurementManagement && (
            <>
              <h2>{services.procurementManagement.title} Details</h2>
              <div className="service-section">
                {services.procurementManagement.fields.map((field, idx) => (
                  <div className="form-group" key={idx}>
                    <label>{field.label}</label>
                    {field.type === "text" && (
                      <input
                        type="text"
                        required
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
                              onChange={() =>
                                handleChange(field.fieldName, opt)
                              }
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
              </div>
            </>
          )}

          {formData.serviceNegotiationCost && (
            <>
              <h2>{services.negotiationCost.title} Details</h2>
              <div className="service-section">
                {services.negotiationCost.fields.map((field, idx) => (
                  <div className="form-group" key={idx}>
                    <label>{field.label}</label>
                    <input
                      type="text"
                      required
                      onChange={(e) =>
                        handleChange(field.fieldName, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {formData.serviceOthers && (
            <div className="form-group">
              <label>Other Service Details</label>
              <textarea
                rows="4"
                placeholder="Please provide details about your specific procurement needs."
                value={formData.otherServiceDetails || ""}
                onChange={(e) =>
                  handleChange("otherServiceDetails", e.target.value)
                }
              />
            </div>
          )}

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
