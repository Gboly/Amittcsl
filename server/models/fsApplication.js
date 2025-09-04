import mongoose from "mongoose";

const { Schema } = mongoose;

// Subschema for "Financial Stewards Academy"
const financialStewardsAcademySchema = new Schema({
  primaryGoal: { type: String, default: "" },
  financeExperience: { type: String, default: "" },
  preferredCohort: { type: String, default: "" },
});

// Subschema for "Money Playbook"
const moneyPlaybookSchema = new Schema({
  moneyChallenge: { type: String, default: "" },
  moneyManagementStyle: { type: String, default: "" },
  courseOutcome: { type: String, default: "" },
  preferredCohort: { type: String, default: "" },
});

// Subschema for "Leaving Home"
const leavingHomeSchema = new Schema({
  interestInLeavingHome: { type: String, default: "" },
  struggleArea: { type: String, default: "" },
  challengeApproach: { type: String, default: "" },
  preferredCohort: { type: String, default: "" },
});

// Main Schema for fsCoursesApplication
const fsCoursesApplicationSchema = new Schema({
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
  },
  city: {
    type: String,
    required: true,
  },
  ageRange: {
    type: String,
    default: "",
  },
  occupation: {
    type: String,
    default: "",
  },
  courseTitle: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: "",
  },
  // Define separate fields for each course based on courseId
  fsa: financialStewardsAcademySchema,
  moneyPlaybook: moneyPlaybookSchema,
  leavingHome: leavingHomeSchema,
});

const FsCoursesApplication = mongoose.model(
  "FsCoursesApplication",
  fsCoursesApplicationSchema
);

export default FsCoursesApplication;
