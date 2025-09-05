import mongoose from "mongoose";

// Define the schema for the application form
const giftsApplicationSchema = new mongoose.Schema({
  prefix: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
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
