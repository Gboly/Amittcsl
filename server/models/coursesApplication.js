import mongoose from "mongoose";

const { Schema } = mongoose;

/* ------------------ SUB-SCHEMAS ------------------ */

// Customer Service Training
const customerServiceTrainingSchema = new Schema({
  primaryGoal: { type: String },
  currentRole: { type: String },
  customerServiceExperience: { type: Number },
  customerServiceChallenges: { type: String },
  preferredCohort: { type: String },
});

// The Power of Professionalism
const professionalismSchema = new Schema({
  currentJobRole: { type: String },
  professionalGoals: { type: String },
  professionalismLevel: { type: String, enum: ["Low", "Medium", "High"] },
  preferredCohort: { type: String },
});

// Introduction to Team Leadership
const teamLeadershipSchema = new Schema({
  leadershipExperience: { type: String },
  leadershipChallenges: { type: String },
  leadershipStyle: { type: String },
  preferredCohort: { type: String },
});

// Essential Management
const managementSchema = new Schema({
  managementExperience: { type: String },
  managementStyle: { type: String },
  managementChallenges: { type: String },
  preferredCohort: { type: String },
});

// Emotional Intelligence at Workplace
const emotionalIntelligenceSchema = new Schema({
  emotionalIntelligenceLevel: { type: String, enum: ["Low", "Medium", "High"] },
  emotionalChallenges: { type: String },
  preferredCohort: { type: String },
});

// Ambition: The Root of All Achievement
const ambitionSchema = new Schema({
  careerGoals: { type: String },
  careerMotivation: { type: String },
  ambitionLevel: { type: String, enum: ["Low", "Medium", "High"] },
  preferredCohort: { type: String },
});

/* ------------------ MAIN APPLICATION SCHEMA ------------------ */

const professionalCourseApplicationSchema = new Schema(
  {
    // Personal Information
    prefix: { type: String, required: true, enum: ["Mr", "Mrs", "Ms", "Dr"] },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },

    // Course Info
    courseId: { type: String, required: true },
    courseTitle: { type: String, required: true },

    // Course-specific answers (only one will be filled depending on courseId)
    customerServiceTraining: customerServiceTrainingSchema,
    professionalism: professionalismSchema,
    teamLeadership: teamLeadershipSchema,
    management: managementSchema,
    emotionalIntelligence: emotionalIntelligenceSchema,
    ambition: ambitionSchema,

    // Custom Message
    customMessage: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model(
  "ProfessionalCourseApplication",
  professionalCourseApplicationSchema
);
