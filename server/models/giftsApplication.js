import mongoose from "mongoose";

// Define the schema for the application form
const giftsApplicationSchema = new mongoose.Schema({
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
  serviceFestive: { type: Boolean, default: false },
  serviceMilestone: { type: Boolean, default: false },
  serviceBirthday: { type: Boolean, default: false },
  serviceHampers: { type: Boolean, default: false },
  occasion: { type: String },
  preferredGiftType: { type: String },
  milestoneType: { type: String },
  personalizedItems: { type: String },
  awardCategory: { type: String },
  preferredAwardType: { type: String },
  preferredHampers: { type: String },
  brandingPreferences: { type: String },

  customMessage: { type: String },
  //   declarationConfirmed: { type: Boolean, required: true },
});

// Create the model based on the schema
const GiftsApplication = mongoose.model(
  "giftsApplication",
  giftsApplicationSchema
);

export default GiftsApplication;
