import mongoose from "mongoose";

const fadApplicationSchema = new mongoose.Schema(
  {
    // Personal Information
    prefix: {
      type: String,
      enum: ["Mr", "Mrs", "Ms", "Dr"],
      required: true,
    },
    name: { type: String, required: true },
    middleName: { type: String },
    surname: { type: String, required: true },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },

    // Services Required (checkboxes)
    serviceCapitalFunding: { type: Boolean, default: false },
    servicePortfolioDiversification: { type: Boolean, default: false },
    serviceAccountingCompliance: { type: Boolean, default: false },
    serviceOthers: { type: Boolean, default: false },

    // Service-specific details (from `services` object in your form config)
    capitalFunding: {
      primaryGoal: {
        type: String,
        enum: [
          "Raise Capital",
          "Structure Investment Opportunities",
          "Optimize Capital Allocation",
          "Other",
        ],
      },
      investmentFocus: {
        type: String,
        enum: ["Equity", "Debt", "Quasi-equity", "Mixed"],
      },
      timeline: {
        type: String,
        enum: ["3-6 Months", "6-12 Months", "12+ Months"],
      },
    },
    portfolioDiversification: {
      currentPortfolioAllocation: { type: String },
      riskTolerance: { type: String, enum: ["Low", "Medium", "High"] },
      desiredOutcome: { type: String },
    },
    accountingCompliance: {
      governmentOrAgency: { type: String },
      serviceType: {
        type: String,
        enum: ["Financial Advisory", "Accounting Services", "Compliance"],
      },
    },

    // Custom Message
    otherServiceDetails: { type: String },
    customMessage: { type: String },

    // Declaration
    declarationConfirmed: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const FadApplication = mongoose.model("fadApplication", fadApplicationSchema);

export default FadApplication;
