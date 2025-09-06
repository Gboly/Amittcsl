import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  // Organisation Information
  organisationName: { type: String, required: true },
  entityType: {
    type: String,
    enum: ["SME", "Corporate Organisation", "Government Agency", "Other"],
    required: true,
  },
  contactPerson: { type: String, required: true }, // full name of contact person
  designation: { type: String, required: true }, // role of the contact person
  officeAddress: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String }, // optional
  mainGoal: {
    type: String,
    enum: [
      "Reduce financial stress",
      "Increase financial literacy",
      "Build long-term savings",
      "Prepare for retirement",
      "Improve productivity through financial resilience",
      "Other",
    ],
    required: true,
  },
  experienceLevel: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  cohort: {
    type: String,
    enum: ["September 2025", "November 2025"],
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
});

const FeeApplication = mongoose.model("FeeApplication", applicationSchema);

export default FeeApplication;
