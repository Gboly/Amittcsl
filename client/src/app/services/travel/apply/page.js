"use client";

import { useMemo, useState } from "react";
import "./page.css";
import useSubmitGuard from "@/utils/helper";

const DEST_OPTIONS = [
  { value: "nigeria", label: "Nigeria" },
  { value: "ghana", label: "Ghana" },
  { value: "both", label: "Nigeria & Ghana" },
  { value: "other", label: "Other (West Africa)" },
];

const NG_ATTRACTIONS = [
  "Lekki Conservation Centre",
  "Nike Art Gallery",
  "Olumo Rock",
  "Olusegun Obasanjo Library",
  "Private Beaches",
];

const GH_ATTRACTIONS = [
  "Labadi Beach",
  "Jamestown Lighthouse",
  "Private Beaches",
];

const ENTERTAINMENT = ["Concerts", "Nightlife", "Festivals", "Cultural Events"];

const MEAL_PLANS = [
  "Breakfast Only (BB)",
  "Half Board (HB)",
  "Full Board (FB)",
];

const ACC_TIERS = ["3★", "4★", "5★", "Villa", "Apartment"];

const INIT = {
  // A) Contact
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryOfResidence: "",
  preferredContact: "email",

  // B) Group
  groupName: "",
  travellersTotal: "",
  adults: "",
  teens: "",
  children: "",
  purpose: "family",

  // C) Trip basics
  destinationCountry: "nigeria",
  citiesPreferred: "",
  startDate: "",
  endDate: "",
  departureCity: "",
  departureCountry: "",

  // D) Transport & Stay
  flightsNeeded: "yes",
  localTransfers: "yes",
  accommodationTier: "4★",
  roomingSetup: "",
  privateChef: "no",
  mealPlan: "Breakfast Only (BB)",
  dietaryNeeds: "",

  // E) Experiences
  attractionsNG: [],
  attractionsGH: [],
  entertainmentPrefs: [],
  otherAttractions: "",

  // F) Logistics
  mobilityNeeds: "",
  medicalNotes: "",
  visaSupportNeeded: "no",
  nationality: "",
  preferredLanguage: "English",
  contentCaptureConsent: "no",

  // G) Budget
  currency: "USD",
  budgetMin: "",
  budgetMax: "",
  paymentPreference: "bank-transfer",
  referral: "",

  // H) Consent
  messageToPlanner: "",
  agreeToTerms: false,
  marketingOptIn: false,
};

export default function BookingApplyPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(INIT);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverMsg, setServerMsg] = useState("");

  // Derived values
  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const tripNights = useMemo(() => {
    if (!data.startDate || !data.endDate) return 0;
    const s = new Date(data.startDate);
    const e = new Date(data.endDate);
    const diff = Math.round((e - s) / (1000 * 60 * 60 * 24));
    return Math.max(diff, 0);
  }, [data.startDate, data.endDate]);

  const leadTimeDays = useMemo(() => {
    if (!data.startDate) return 0;
    const s = new Date(data.startDate);
    const now = new Date();
    const diff = Math.round((s - now) / (1000 * 60 * 60 * 24));
    return diff;
  }, [data.startDate]);

  const rushBooking = leadTimeDays > 0 && leadTimeDays < 60;

  // after tripNights, leadTimeDays, rushBooking, etc.
  const { submitErrors, canSubmit } = useSubmitGuard(data, tripNights);

  // Step validation
  const errors = useMemo(() => {
    const e = {};

    if (step === 1) {
      if (!data.firstName.trim()) e.firstName = "First name is required.";
      if (!data.lastName.trim()) e.lastName = "Last name is required.";
      if (!data.email.trim()) e.email = "Email is required.";
      if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Enter a valid email.";
      if (!data.phone.trim()) e.phone = "Phone is required.";
      const total = Number(data.travellersTotal || 0);
      if (!total || total < 10)
        e.travellersTotal = "Minimum group size is 10 travellers.";
      if (!data.adults) e.adults = "Number of adults is required.";
    }

    if (step === 2) {
      if (!data.startDate) e.startDate = "Start date is required.";
      if (!data.endDate) e.endDate = "End date is required.";
      if (tripNights < 7)
        e.tripNights = "Minimum stay is 7 nights (adjust your dates).";
      if (!data.destinationCountry)
        e.destinationCountry = "Select a destination.";
      if (!data.departureCountry)
        e.departureCountry = "Departure country is required.";
    }

    if (step === 3) {
      if (!data.flightsNeeded) e.flightsNeeded = "Please choose an option.";
      if (!data.localTransfers) e.localTransfers = "Please choose an option.";
      if (!data.accommodationTier)
        e.accommodationTier = "Select accommodation tier.";
      if (!data.mealPlan) e.mealPlan = "Select a meal plan.";
    }

    if (step === 7) {
      if (!data.agreeToTerms)
        e.agreeToTerms = "You must accept the terms to continue.";
    }

    return e;
  }, [step, data, tripNights]);

  const canNext = Object.keys(errors).length === 0;

  const onChange = (name, value) => {
    setData((d) => ({ ...d, [name]: value }));
  };

  const toggleMulti = (name, option) => {
    setData((d) => {
      const arr = new Set(d[name] || []);
      if (arr.has(option)) arr.delete(option);
      else arr.add(option);
      return { ...d, [name]: Array.from(arr) };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // final guard
    if (tripNights < 7) {
      setServerMsg("Trip must be at least 7 nights.");
      return;
    }
    if (Number(data.travellersTotal || 0) < 10) {
      setServerMsg("Minimum group size is 10.");
      return;
    }
    setServerMsg("");
    setSubmitting(true);
    try {
      const payload = {
        ...data,
        derived: {
          tripNights,
          leadTimeDays,
          rushBooking,
          meetsMinGroup: Number(data.travellersTotal || 0) >= 10,
          meetsMinNights: tripNights >= 7,
        },
      };

      const res = await fetch("/api/booking/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.message || "Failed to submit application.");
      }

      setSubmitted(true);
    } catch (err) {
      setServerMsg(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="apply-page">
        <section className="apply-card success">
          <h1>Application Received 🎉</h1>
          <p>
            Thank you, {data.firstName}. Your group booking request has been
            submitted.
          </p>
          <p className="muted">
            Our team will review your details and follow up via email with your
            curated plan, timelines, and <strong>payment method options</strong>
            .
          </p>
          {rushBooking && (
            <div className="banner warning">
              <strong>Heads-up:</strong> your start date is in {leadTimeDays}{" "}
              days. Rush handling may apply.
            </div>
          )}
        </section>
      </main>
    );
  }

  return (
    <main className="apply-page">
      <form className="apply-form" onSubmit={handleSubmit}>
        {/* Header */}
        <header className="apply-header">
          <h1>Group Booking Application</h1>
          <p className="muted">
            AMITT Travels &amp; Tours — Curated group experiences across West
            Africa. Minimum group size: <strong>10</strong>. Minimum stay:{" "}
            <strong>7 nights</strong>.
          </p>
          <div className="banner info">
            After you apply,{" "}
            <strong>further details and payment methods</strong> will be
            communicated to you via email.
          </div>
          {rushBooking && (
            <div className="banner warning">
              Your trip starts in {leadTimeDays} days —{" "}
              <strong>rush booking</strong> may attract additional handling
              fees.
            </div>
          )}
        </header>

        {/* Stepper */}
        <nav className="apply-steps">
          {[
            "Contact & Group",
            "Dates & Destination",
            "Transport & Stay",
            "Experiences",
            "Logistics",
            "Budget",
            "Review & Consent",
          ].map((label, i) => (
            <button
              type="button"
              key={label}
              className={`step ${step === i + 1 ? "active" : ""}`}
              onClick={() => setStep(i + 1)}
            >
              <span className="step-index">{i + 1}</span>
              <span className="step-label">{label}</span>
            </button>
          ))}
        </nav>

        {/* Steps */}
        {step === 1 && (
          <section className="apply-card">
            <h2>Contact & Group</h2>
            <div className="grid two">
              <Field
                label="First Name *"
                name="firstName"
                value={data.firstName}
                onChange={onChange}
                error={errors.firstName}
              />
              <Field
                label="Last Name *"
                name="lastName"
                value={data.lastName}
                onChange={onChange}
                error={errors.lastName}
              />
              <Field
                label="Email *"
                name="email"
                value={data.email}
                onChange={onChange}
                error={errors.email}
                type="email"
              />
              <Field
                label="Phone *"
                name="phone"
                value={data.phone}
                onChange={onChange}
                error={errors.phone}
              />
              <Field
                label="Country of Residence"
                name="countryOfResidence"
                value={data.countryOfResidence}
                onChange={onChange}
              />
              <Select
                label="Preferred Contact"
                name="preferredContact"
                value={data.preferredContact}
                onChange={onChange}
                options={[
                  { value: "email", label: "Email" },
                  { value: "phone", label: "Phone" },
                  { value: "whatsapp", label: "WhatsApp" },
                ]}
              />
              <Field
                label="Group / Company Name (optional)"
                name="groupName"
                value={data.groupName}
                onChange={onChange}
              />
              <Field
                label="Total Travellers * (min 10)"
                name="travellersTotal"
                value={data.travellersTotal}
                onChange={onChange}
                error={errors.travellersTotal}
                type="number"
                min="1"
              />
              <Field
                label="Adults *"
                name="adults"
                value={data.adults}
                onChange={onChange}
                error={errors.adults}
                type="number"
                min="0"
              />
              <Field
                label="Teens"
                name="teens"
                value={data.teens}
                onChange={onChange}
                type="number"
                min="0"
              />
              <Field
                label="Children"
                name="children"
                value={data.children}
                onChange={onChange}
                type="number"
                min="0"
              />
              <Select
                label="Purpose"
                name="purpose"
                value={data.purpose}
                onChange={onChange}
                options={[
                  { value: "family", label: "Family / Friends" },
                  { value: "corporate", label: "Corporate" },
                  { value: "other", label: "Other" },
                ]}
              />
            </div>
          </section>
        )}

        {step === 2 && (
          <section className="apply-card">
            <h2>Dates & Destination</h2>
            <div className="grid two">
              <Select
                label="Destination *"
                name="destinationCountry"
                value={data.destinationCountry}
                onChange={onChange}
                options={DEST_OPTIONS}
                error={errors.destinationCountry}
              />
              <Field
                label="Preferred Cities (comma separated)"
                name="citiesPreferred"
                value={data.citiesPreferred}
                onChange={onChange}
              />
              <Field
                label="Start Date *"
                name="startDate"
                type="date"
                value={data.startDate}
                onChange={onChange}
                error={errors.startDate}
                min={todayISO}
              />
              <Field
                label="End Date *"
                name="endDate"
                type="date"
                value={data.endDate}
                onChange={onChange}
                error={errors.endDate || errors.tripNights}
                min={data.startDate || todayISO}
              />
              <Field
                label="Departure City"
                name="departureCity"
                value={data.departureCity}
                onChange={onChange}
              />
              <Field
                label="Departure Country *"
                name="departureCountry"
                value={data.departureCountry}
                onChange={onChange}
                error={errors.departureCountry}
              />
            </div>

            <div className="meta-row">
              <Badge>
                Trip Length: <strong>{tripNights}</strong> nights
              </Badge>
              <Badge tone={leadTimeDays < 60 ? "warn" : "ok"}>
                Lead Time: <strong>{Math.max(leadTimeDays, 0)}</strong> days
              </Badge>
            </div>
          </section>
        )}

        {step === 3 && (
          <section className="apply-card">
            <h2>Transport & Stay</h2>
            <div className="grid two">
              <RadioGroup
                label="Flights Needed? *"
                name="flightsNeeded"
                value={data.flightsNeeded}
                onChange={onChange}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
                error={errors.flightsNeeded}
              />
              <RadioGroup
                label="Local Transfers? *"
                name="localTransfers"
                value={data.localTransfers}
                onChange={onChange}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                ]}
                error={errors.localTransfers}
              />
              <Select
                label="Accommodation Tier *"
                name="accommodationTier"
                value={data.accommodationTier}
                onChange={onChange}
                options={ACC_TIERS.map((v) => ({ value: v, label: v }))}
                error={errors.accommodationTier}
              />
              <Field
                label="Rooming Setup (e.g., 5 twin, 3 doubles)"
                name="roomingSetup"
                value={data.roomingSetup}
                onChange={onChange}
              />
              <RadioGroup
                label="Private Chef (optional)"
                name="privateChef"
                value={data.privateChef}
                onChange={onChange}
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
              />
              <Select
                label="Meal Plan"
                name="mealPlan"
                value={data.mealPlan}
                onChange={onChange}
                options={MEAL_PLANS.map((v) => ({ value: v, label: v }))}
                error={errors.mealPlan}
              />
              <Field
                label="Dietary Needs (if any)"
                name="dietaryNeeds"
                value={data.dietaryNeeds}
                onChange={onChange}
                placeholder="Halal, vegan, allergies, etc."
              />
            </div>
          </section>
        )}

        {step === 4 && (
          <section className="apply-card">
            <h2>Experiences</h2>
            <div className="grid two">
              {(data.destinationCountry === "nigeria" ||
                data.destinationCountry === "both") && (
                <CheckboxGroup
                  label="Nigeria Attractions"
                  name="attractionsNG"
                  value={data.attractionsNG}
                  options={NG_ATTRACTIONS}
                  onToggle={toggleMulti}
                />
              )}
              {(data.destinationCountry === "ghana" ||
                data.destinationCountry === "both") && (
                <CheckboxGroup
                  label="Ghana Attractions"
                  name="attractionsGH"
                  value={data.attractionsGH}
                  options={GH_ATTRACTIONS}
                  onToggle={toggleMulti}
                />
              )}
              <CheckboxGroup
                label="Entertainment & Lifestyle"
                name="entertainmentPrefs"
                value={data.entertainmentPrefs}
                options={ENTERTAINMENT}
                onToggle={toggleMulti}
              />
              <Field
                label="Other Attractions (optional)"
                name="otherAttractions"
                value={data.otherAttractions}
                onChange={onChange}
                placeholder="Waterfalls, national parks, festivals…"
              />
            </div>
          </section>
        )}

        {step === 5 && (
          <section className="apply-card">
            <h2>Logistics & Special Requirements</h2>
            <div className="grid two">
              <Field
                label="Mobility / Accessibility Needs"
                name="mobilityNeeds"
                value={data.mobilityNeeds}
                onChange={onChange}
              />
              <Field
                label="Medical Notes (if any)"
                name="medicalNotes"
                value={data.medicalNotes}
                onChange={onChange}
                placeholder="Non-diagnostic notes that affect travel"
              />
              <RadioGroup
                label="Visa Support Needed?"
                name="visaSupportNeeded"
                value={data.visaSupportNeeded}
                onChange={onChange}
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
              />
              <Field
                label="Nationality"
                name="nationality"
                value={data.nationality}
                onChange={onChange}
              />
              <Select
                label="Preferred Language"
                name="preferredLanguage"
                value={data.preferredLanguage}
                onChange={onChange}
                options={[
                  { value: "English", label: "English" },
                  { value: "French", label: "French" },
                  { value: "Other", label: "Other" },
                ]}
              />
              <RadioGroup
                label="Allow Content Capture (photo/video) during trip?"
                name="contentCaptureConsent"
                value={data.contentCaptureConsent}
                onChange={onChange}
                options={[
                  { value: "no", label: "No" },
                  { value: "yes", label: "Yes" },
                ]}
              />
            </div>
          </section>
        )}

        {step === 6 && (
          <section className="apply-card">
            <h2>Budget & Payments</h2>
            <div className="grid two">
              <Select
                label="Currency"
                name="currency"
                value={data.currency}
                onChange={onChange}
                options={[
                  { value: "USD", label: "USD" },
                  { value: "NGN", label: "NGN" },
                  { value: "GHS", label: "GHS" },
                  { value: "GBP", label: "GBP" },
                  { value: "EUR", label: "EUR" },
                ]}
              />
              <Field
                label="Budget Min"
                name="budgetMin"
                value={data.budgetMin}
                onChange={onChange}
                type="number"
                min="0"
              />
              <Field
                label="Budget Max"
                name="budgetMax"
                value={data.budgetMax}
                onChange={onChange}
                type="number"
                min={data.budgetMin || 0}
              />
              <Select
                label="Preferred Payment Method"
                name="paymentPreference"
                value={data.paymentPreference}
                onChange={onChange}
                options={[
                  { value: "bank-transfer", label: "Bank Transfer" },
                  { value: "card", label: "Card" },
                  { value: "other", label: "Other" },
                ]}
              />
              <Field
                label="Referral / How did you hear about us?"
                name="referral"
                value={data.referral}
                onChange={onChange}
              />
              <Field
                label="Message to Planner"
                name="messageToPlanner"
                value={data.messageToPlanner}
                onChange={onChange}
                textarea
                placeholder="Tell us anything we should know to tailor your experience."
              />
            </div>
            <div className="banner subtle">
              Final <strong>payment methods & next steps</strong> will be shared
              via email after we review your application.
            </div>
          </section>
        )}

        {step === 7 && (
          <section className="apply-card">
            <h2>Review & Consent</h2>
            <div className="review-box">
              <p>
                Please confirm your details are accurate. By submitting, you
                agree to be contacted regarding this booking. Payment
                instructions will be emailed after review.
              </p>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={data.agreeToTerms}
                  onChange={(e) => onChange("agreeToTerms", e.target.checked)}
                />
                <span>I accept the booking terms and privacy notice.</span>
              </label>
              <label className="checkbox">
                <input
                  type="checkbox"
                  checked={data.marketingOptIn}
                  onChange={(e) => onChange("marketingOptIn", e.target.checked)}
                />
                <span>
                  Keep me updated with curated trip news and offers (optional).
                </span>
              </label>
              {errors.agreeToTerms && (
                <div className="error">{errors.agreeToTerms}</div>
              )}
            </div>
          </section>
        )}

        {/* Footer Actions */}
        <footer className="apply-footer">
          {serverMsg && <div className="error server">{serverMsg}</div>}
          <div className="actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
            >
              Back
            </button>
            {step < 7 ? (
              <button
                type="button"
                className="btn-primary"
                onClick={() =>
                  canNext ? setStep((s) => Math.min(7, s + 1)) : null
                }
                disabled={!canNext}
                title={!canNext ? "Please fix highlighted fields" : ""}
              >
                Next
              </button>
            ) : (
              <button
                className={`btn-primary ${!canSubmit ? "disabled" : ""}`}
                disabled={!canSubmit || submitting}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            )}
          </div>
          <p className="tiny muted">
            Note: Reservations should be made at least 2 months before
            departure. Short-notice bookings are accepted but may attract
            additional fees.
          </p>
        </footer>
      </form>
    </main>
  );
}

/* ---- UI Helpers ---- */

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  min,
  placeholder,
  textarea,
}) {
  return (
    <label className={`field ${error ? "has-error" : ""}`}>
      <span className="field-label">{label}</span>
      {textarea ? (
        <textarea
          className="input"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
          rows={5}
        />
      ) : (
        <input
          className="input"
          name={name}
          type={type}
          value={value}
          min={min}
          placeholder={placeholder}
          onChange={(e) => onChange(name, e.target.value)}
        />
      )}
      {error && <span className="error">{error}</span>}
    </label>
  );
}

function Select({ label, name, value, onChange, options, error }) {
  return (
    <label className={`field ${error ? "has-error" : ""}`}>
      <span className="field-label">{label}</span>
      <select
        className="input"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <span className="error">{error}</span>}
    </label>
  );
}

function RadioGroup({ label, name, value, onChange, options, error }) {
  return (
    <fieldset className={`field radios ${error ? "has-error" : ""}`}>
      <legend className="field-label">{label}</legend>
      <div className="radios-row">
        {options.map((o) => (
          <label key={o.value} className="radio">
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={(e) => onChange(name, e.target.value)}
            />
            <span>{o.label}</span>
          </label>
        ))}
      </div>
      {error && <span className="error">{error}</span>}
    </fieldset>
  );
}

function CheckboxGroup({ label, name, value, options, onToggle }) {
  return (
    <fieldset className="field checks">
      <legend className="field-label">{label}</legend>
      <div className="checks-grid">
        {options.map((opt) => (
          <label key={opt} className="checkbox">
            <input
              type="checkbox"
              checked={(value || []).includes(opt)}
              onChange={() => onToggle(name, opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Badge({ children, tone = "neutral" }) {
  return <span className={`badge ${tone}`}>{children}</span>;
}
