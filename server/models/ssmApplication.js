import mongoose from "mongoose";

const { Schema } = mongoose;

const ssmApplicationSchema = new Schema(
  {
    // Personal Information
    prefix: { type: String, required: true, enum: ["Mr", "Mrs", "Ms", "Dr"] },
    name: { type: String, required: true },
    middleName: { type: String },
    surname: { type: String, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },

    // Services
    serviceDematerialization: { type: Boolean, default: false },
    serviceDividends: { type: Boolean, default: false },
    serviceConsolidation: { type: Boolean, default: false },
    serviceCSCS: { type: Boolean, default: false },
    otherService: { type: String },

    // Declaration
    declarationConfirmed: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("SsmApplication", ssmApplicationSchema);
