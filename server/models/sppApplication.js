import mongoose from "mongoose";

// Define schema for the application form
const sppApplicationSchema = new mongoose.Schema(
  {
    prefix: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    services: {
      sourcingVendor: {
        type: Boolean,
        default: false,
      },
      procurementManagement: {
        type: Boolean,
        default: false,
      },
      negotiationCost: {
        type: Boolean,
        default: false,
      },
      others: {
        type: Boolean,
        default: false,
      },
    },
    sourcingVendorDetails: {
      primaryRequirement: String,
      categoryOfProduct: String,
      preferredSupplierType: String,
    },
    procurementManagementDetails: {
      projectTimeline: String,
      preferredDeliveryMethod: String,
    },
    negotiationCostDetails: {
      estimatedBudget: String,
      priceRangeConsiderations: String,
    },
    otherServiceDetails: String,
    declarationConfirmed: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

// Create model from schema
const SppApplication = mongoose.model("sppApplication", sppApplicationSchema);

export default SppApplication;
