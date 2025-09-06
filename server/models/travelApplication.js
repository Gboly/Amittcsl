// models/BookingApplication.js
import mongoose from "mongoose";

/* ----- Shared enums ----- */
const DESTINATION_ENUM = ["nigeria", "ghana", "both", "other"];
const CONTACT_PREF_ENUM = ["email", "phone", "whatsapp"];
const PURPOSE_ENUM = ["family", "corporate", "other"];
const ACC_TIER_ENUM = ["3★", "4★", "5★", "Villa", "Apartment"];
const MEAL_PLAN_ENUM = [
  "Breakfast Only (BB)",
  "Half Board (HB)",
  "Full Board (FB)",
];
const YES_NO_ENUM = ["yes", "no"];
const LANGUAGE_ENUM = ["English", "French", "Other"];
const CURRENCY_ENUM = ["USD", "NGN", "GHS", "GBP", "EUR"];
const PAY_PREF_ENUM = ["bank-transfer", "card", "other"];
const STATUS_ENUM = [
  "new",
  "pending-review",
  "quoted",
  "confirmed",
  "cancelled",
];

const EMAIL_RE = /^\S+@\S+\.\S+$/;

/* ----- Sub-schemas ----- */
const ContactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: EMAIL_RE,
    },
    phone: { type: String, required: true, trim: true },
    countryOfResidence: { type: String, trim: true },
    preferredContact: {
      type: String,
      enum: CONTACT_PREF_ENUM,
      default: "email",
    },
  },
  { _id: false }
);

const GroupSchema = new mongoose.Schema(
  {
    groupName: { type: String, trim: true },
    travellersTotal: {
      type: Number,
      required: true,
      min: [1, "Total travellers must be at least 1."],
      validate: {
        validator: (v) => v >= 10,
        message: "Minimum group size is 10 travellers.",
      },
    },
    adults: { type: Number, required: true, min: 0 },
    teens: { type: Number, default: 0, min: 0 },
    children: { type: Number, default: 0, min: 0 },
    purpose: { type: String, enum: PURPOSE_ENUM, default: "family" },
  },
  { _id: false }
);

const TripSchema = new mongoose.Schema(
  {
    destinationCountry: {
      type: String,
      enum: DESTINATION_ENUM,
      required: true,
    },
    citiesPreferred: {
      type: [String],
      set: (v) =>
        typeof v === "string"
          ? v
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
          : Array.isArray(v)
          ? v
          : [],
    },
    startDate: { type: Date, required: true },
    endDate: {
      type: Date,
      required: true,
      validate: [
        {
          validator: function (v) {
            if (!this.startDate || !v) return true;
            return v > this.startDate; // end after start
          },
          message: "End date must be after start date.",
        },
        {
          validator: function (v) {
            if (!this.startDate || !v) return true;
            const ms = v - this.startDate;
            const nights = Math.floor(ms / (1000 * 60 * 60 * 24));
            return nights >= 7;
          },
          message: "Minimum stay is 7 nights.",
        },
      ],
    },
    departureCity: { type: String, trim: true },
    departureCountry: { type: String, required: true, trim: true },

    // Derived fields (auto-computed in pre-validate)
    tripNights: { type: Number, default: 0 },
    leadTimeDays: { type: Number, default: 0 },
    rushBooking: { type: Boolean, default: false },
  },
  { _id: false }
);

const TransportSchema = new mongoose.Schema(
  {
    flightsNeeded: { type: String, enum: YES_NO_ENUM, required: true },
    localTransfers: { type: String, enum: YES_NO_ENUM, required: true },
  },
  { _id: false }
);

const StaySchema = new mongoose.Schema(
  {
    accommodationTier: { type: String, enum: ACC_TIER_ENUM, required: true },
    roomingSetup: { type: String, trim: true }, // e.g., "5 twin, 3 doubles"
    privateChef: { type: String, enum: YES_NO_ENUM, default: "no" },
    mealPlan: { type: String, enum: MEAL_PLAN_ENUM, required: true },
    dietaryNeeds: { type: String, trim: true },
  },
  { _id: false }
);

const ExperiencesSchema = new mongoose.Schema(
  {
    attractionsNG: { type: [String], default: [] }, // Lekki, Nike, Olumo, OOPL, Private Beaches
    attractionsGH: { type: [String], default: [] }, // Labadi, Jamestown, Private Beaches
    entertainmentPrefs: { type: [String], default: [] }, // Concerts, Nightlife, Festivals, Cultural Events
    otherAttractions: { type: String, trim: true },
  },
  { _id: false }
);

const LogisticsSchema = new mongoose.Schema(
  {
    mobilityNeeds: { type: String, trim: true },
    medicalNotes: { type: String, trim: true },
    visaSupportNeeded: { type: String, enum: YES_NO_ENUM, default: "no" },
    nationality: { type: String, trim: true },
    preferredLanguage: {
      type: String,
      enum: LANGUAGE_ENUM,
      default: "English",
    },
    contentCaptureConsent: { type: String, enum: YES_NO_ENUM, default: "no" },
  },
  { _id: false }
);

const BudgetSchema = new mongoose.Schema(
  {
    currency: { type: String, enum: CURRENCY_ENUM, default: "USD" },
    budgetMin: { type: Number, min: 0 },
    budgetMax: { type: Number, min: 0 },
    paymentPreference: {
      type: String,
      enum: PAY_PREF_ENUM,
      default: "bank-transfer",
    },
    referral: { type: String, trim: true },
  },
  { _id: false }
);

const ConsentSchema = new mongoose.Schema(
  {
    agreeToTerms: { type: Boolean, required: true, default: false },
    marketingOptIn: { type: Boolean, default: false },
  },
  { _id: false }
);

/* ----- Main schema ----- */
const BookingApplicationSchema = new mongoose.Schema(
  {
    contact: { type: ContactSchema, required: true },
    group: { type: GroupSchema, required: true },
    trip: { type: TripSchema, required: true },
    transport: { type: TransportSchema, required: true },
    stay: { type: StaySchema, required: true },
    experiences: { type: ExperiencesSchema, default: {} },
    logistics: { type: LogisticsSchema, default: {} },
    budget: { type: BudgetSchema, default: {} },
    consent: { type: ConsentSchema, required: true },

    messageToPlanner: { type: String, trim: true },

    // Derived rule flags (also auto-computed)
    derived: {
      meetsMinGroup: { type: Boolean, default: false },
      meetsMinNights: { type: Boolean, default: false },
    },

    // Ops
    status: { type: String, enum: STATUS_ENUM, default: "new", index: true },
    adminNotes: { type: String, trim: true },
    source: { type: String, trim: true, default: "website" },
  },
  { timestamps: true }
);

/* ----- Pre-validate: compute derived values ----- */
BookingApplicationSchema.pre("validate", function (next) {
  try {
    // Trip nights
    if (this.trip?.startDate && this.trip?.endDate) {
      const ms = this.trip.endDate - this.trip.startDate;
      const nights = Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
      this.trip.tripNights = nights;
    } else {
      this.trip.tripNights = 0;
    }

    // Lead time & rush
    if (this.trip?.startDate) {
      const now = new Date();
      const msLead = this.trip.startDate - now;
      const daysLead = Math.floor(msLead / (1000 * 60 * 60 * 24));
      this.trip.leadTimeDays = daysLead;
      this.trip.rushBooking = daysLead > 0 && daysLead < 60;
    } else {
      this.trip.leadTimeDays = 0;
      this.trip.rushBooking = false;
    }

    // Derived rule flags
    const travellers = Number(this.group?.travellersTotal || 0);
    this.derived.meetsMinGroup = travellers >= 10;
    this.derived.meetsMinNights = (this.trip?.tripNights || 0) >= 7;

    // Normalize budgets (ensure min <= max if both provided)
    if (
      typeof this.budget?.budgetMin === "number" &&
      typeof this.budget?.budgetMax === "number" &&
      this.budget.budgetMin > this.budget.budgetMax
    ) {
      // swap
      const tmp = this.budget.budgetMin;
      this.budget.budgetMin = this.budget.budgetMax;
      this.budget.budgetMax = tmp;
    }

    next();
  } catch (err) {
    next(err);
  }
});

/* ----- Indexes helpful for ops ----- */
BookingApplicationSchema.index({ "contact.email": 1, createdAt: -1 });
BookingApplicationSchema.index({ "trip.destinationCountry": 1, createdAt: -1 });
BookingApplicationSchema.index({ status: 1, createdAt: -1 });

/* ----- Model ----- */
const TravelApplication =
  mongoose.models.BookingApplication ||
  mongoose.model("BookingApplication", BookingApplicationSchema);

export default TravelApplication;
