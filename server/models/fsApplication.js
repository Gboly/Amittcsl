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

// Subschema for "Investment Bootcamp"
const investmentBootcampSchema = new Schema({
  bootcampInterest: { type: String, default: "" },
  preferredInstruments: { type: [String], default: [] }, // array since checkbox
  hasCSCSAccount: { type: String, default: "" }, // "Yes" or "No"
  preferredCohort: { type: String, default: "" },
});

// Subschema for "Become an Investor in Nigerian Stocks"
const becomeInvestorNgStocksSchema = new Schema({
  stockExperience: { type: String, default: "" },
  investorMotivation: { type: String, default: "" },
  curiousArea: { type: String, default: "" },
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
  // Course-specific nested fields
  fsa: financialStewardsAcademySchema,
  moneyPlaybook: moneyPlaybookSchema,
  leavingHome: leavingHomeSchema,
  investmentBootcamp: investmentBootcampSchema,
  becomeInvestorNgStocks: becomeInvestorNgStocksSchema,
});

const FsCoursesApplication = mongoose.model(
  "FsCoursesApplication",
  fsCoursesApplicationSchema
);

export default FsCoursesApplication;
