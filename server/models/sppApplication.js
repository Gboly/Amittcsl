import mongoose from "mongoose";

// Define schema for the application form
const sppApplicationSchema = new mongoose.Schema(
  {
    organisationName: {
      type: String,
      required: true,
    },
    entityType: {
      type: String,
      enum: ["SME", "Corporate Organisation", "Government Agency", "Other"],
      required: true,
    },
    contactPerson: {
      type: String,
      required: true,
    }, // Full name of primary contact
    designation: {
      type: String,
      required: true,
    }, // Role of the contact person
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    officeAddress: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    }, // Optional

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
