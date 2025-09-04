import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    enum: ["Nigeria", "USA", "UK"], // You can add more countries if necessary
  },
  city: {
    type: String,
    required: true,
  },
  ageRange: {
    type: String,
    enum: ["Under 18", "18–24", "25–34", "35–44", "45–54", "55+"],
    default: "",
  },
  occupation: {
    type: String,
    default: "",
  },
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
