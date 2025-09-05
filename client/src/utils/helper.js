import React from "react";

// --- Helpers: validate all required fields for final submit ---
const EMAIL_RE = /^\S+@\S+\.\S+$/;

function validateAllRequired(d, tripNights) {
  const e = {};
  if (!d.firstName?.trim()) e.firstName = "First name is required.";
  if (!d.lastName?.trim()) e.lastName = "Last name is required.";
  if (!d.email?.trim() || !EMAIL_RE.test(d.email))
    e.email = "Valid email is required.";
  if (!d.phone?.trim()) e.phone = "Phone is required.";

  const total = Number(d.travellersTotal || 0);
  if (!total || total < 10)
    e.travellersTotal = "Minimum group size is 10 travellers.";
  if (!d.adults || Number(d.adults) <= 0) e.adults = "Adults is required.";

  if (!d.destinationCountry) e.destinationCountry = "Select a destination.";
  if (!d.departureCountry)
    e.departureCountry = "Departure country is required.";
  if (!d.startDate) e.startDate = "Start date is required.";
  if (!d.endDate) e.endDate = "End date is required.";
  if (tripNights < 7) e.tripNights = "Minimum stay is 7 nights.";

  if (!d.flightsNeeded) e.flightsNeeded = "Choose flights option.";
  if (!d.localTransfers) e.localTransfers = "Choose transfers option.";
  if (!d.accommodationTier) e.accommodationTier = "Select accommodation tier.";
  if (!d.mealPlan) e.mealPlan = "Select meal plan.";

  if (!d.agreeToTerms) e.agreeToTerms = "You must accept the terms.";

  return e;
}

function useSubmitGuard(data, tripNights) {
  return React.useMemo(() => {
    const submitErrors = validateAllRequired(data, tripNights);
    return {
      submitErrors,
      canSubmit: Object.keys(submitErrors).length === 0,
    };
  }, [data, tripNights]);
}
export default useSubmitGuard;
