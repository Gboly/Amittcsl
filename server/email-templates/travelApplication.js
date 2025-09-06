export const travelApplicationTemplate = `<html lang="en" style="margin:0; padding:0; background:#f5f7fb;">
  <head>
    <meta charset="utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Group Booking Application</title>
    <style>
      @media (max-width: 600px) {
        .card { width: 100% !important; }
        .content { padding: 16px !important; }
        .stack { display:block !important; width:100% !important; }
        .btn { display:block !important; width:100% !important; margin-bottom:8px !important; }
        .two-col { display:block !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#f5f7fb; color:#0f172a;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5f7fb; padding:24px 12px;">
      <tr>
        <td align="center">
          <!-- Card -->
          <table class="card" role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" style="max-width:680px; width:680px; background:#ffffff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="background:#0f172a; color:#ffffff; padding:20px 24px;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td>
                      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:18px; font-weight:700;">
                        New Group Booking Application
                      </div>
                      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; opacity:.9; margin-top:6px;">
                        {{#if brand.name}}{{brand.name}}{{else}}AMITT Travels &amp; Tours{{/if}} • {{createdAtFmt}}{{#unless createdAtFmt}}{{createdAt}}{{/unless}}
                      </div>
                    </td>
                    <td align="right" style="vertical-align:middle;">
                      {{#if brand.logoUrl}}
                        <img src="{{brand.logoUrl}}" alt="{{brand.name}} Logo" width="48" height="48" style="display:block; border:0; outline:none; border-radius:10px;" />
                      {{/if}}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td class="content" style="padding:20px 24px;">
                <!-- Intro line -->
                <p style="margin:0 0 14px 0; font:15px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                  A new booking request was submitted by
                  <strong>{{contact.firstName}} {{contact.lastName}}</strong>.
                </p>

                <!-- Summary chips -->
                <div style="margin:0 0 12px 0;">
                  <span style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#eef2ff; color:#3730a3; border-radius:999px; font:12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                    Destination: {{trip.destinationCountry}}
                  </span>
                  <span style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#ecfeff; color:#155e75; border-radius:999px; font:12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                    Dates: {{startDateFmt}}{{#unless startDateFmt}}{{trip.startDate}}{{/unless}} → {{endDateFmt}}{{#unless endDateFmt}}{{trip.endDate}}{{/unless}}
                  </span>
                  <span style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#f0fdf4; color:#166534; border-radius:999px; font:12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                    Nights: {{trip.tripNights}}
                  </span>
                  <span style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#f8fafc; color:#0f172a; border:1px solid #e2e8f0; border-radius:999px; font:12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                    Lead Time: {{trip.leadTimeDays}} days
                  </span>
                  <span style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#f1f5f9; color:#0f172a; border:1px dashed #cbd5e1; border-radius:999px; font:12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                    Group: {{group.travellersTotal}} (Adults {{group.adults}}{{#if group.teens}}, Teens {{group.teens}}{{/if}}{{#if group.children}}, Children {{group.children}}{{/if}})
                  </span>
                  {{#if trip.rushBooking}}
                  <span style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#fff7ed; color:#9a3412; border:1px solid #fed7aa; border-radius:999px; font:12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                    RUSH BOOKING
                  </span>
                  {{/if}}
                </div>

                <!-- Payment info reminder -->
                <div style="margin:0 0 16px 0; padding:10px 12px; background:#f1f5f9; border:1px solid #e2e8f0; border-radius:12px; font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                  Note: Client has been informed that <strong>further details and payment methods</strong> will be communicated via email after we review their application.
                </div>

                <!-- Two-column layout -->
                <table width="100%" cellspacing="0" cellpadding="0" border="0" class="two-col" style="table-layout:fixed;">
                  <tr>
                    <td class="stack" width="50%" style="vertical-align:top; padding-right:12px;">

                      <!-- Contact -->
                      <div style="margin-bottom:14px; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                        <div style="background:#f9fafb; padding:10px 12px; font-weight:700; font-size:13px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">Contact</div>
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                          <tr><td style="padding:10px 12px; width:40%; color:#334155;">Name</td><td style="padding:10px 12px;">{{contact.firstName}} {{contact.lastName}}</td></tr>
                          <tr><td style="padding:10px 12px; color:#334155;">Email</td><td style="padding:10px 12px;"><a href="mailto:{{
                            contact.email
                          }}" style="color:#2563eb; text-decoration:none;">{{contact.email}}</a></td></tr>
                          {{#if contact.phone}}<tr><td style="padding:10px 12px; color:#334155;">Phone</td><td style="padding:10px 12px;"><a href="tel:{{contact.phone}}" style="color:#2563eb; text-decoration:none;">{{contact.phone}}</a></td></tr>{{/if}}
                          {{#if contact.countryOfResidence}}<tr><td style="padding:10px 12px; color:#334155;">Country</td><td style="padding:10px 12px;">{{contact.countryOfResidence}}</td></tr>{{/if}}
                          {{#if contact.preferredContact}}<tr><td style="padding:10px 12px; color:#334155;">Preferred</td><td style="padding:10px 12px;">{{contact.preferredContact}}</td></tr>{{/if}}
                        </table>
                      </div>

                      <!-- Group -->
                      <div style="margin-bottom:14px; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                        <div style="background:#f9fafb; padding:10px 12px; font-weight:700; font-size:13px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">Group</div>
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                          {{#if group.groupName}}<tr><td style="padding:10px 12px; width:40%; color:#334155;">Name</td><td style="padding:10px 12px;">{{group.groupName}}</td></tr>{{/if}}
                          <tr><td style="padding:10px 12px; color:#334155;">Travellers</td><td style="padding:10px 12px;">{{group.travellersTotal}} total — Adults {{group.adults}}{{#if group.teens}}, Teens {{group.teens}}{{/if}}{{#if group.children}}, Children {{group.children}}{{/if}}</td></tr>
                          {{#if group.purpose}}<tr><td style="padding:10px 12px; color:#334155;">Purpose</td><td style="padding:10px 12px;">{{group.purpose}}</td></tr>{{/if}}
                        </table>
                      </div>

                      <!-- Transport & Stay -->
                      <div style="margin-bottom:14px; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                        <div style="background:#f9fafb; padding:10px 12px; font-weight:700; font-size:13px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">Transport &amp; Stay</div>
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                          <tr><td style="padding:10px 12px; width:40%; color:#334155;">Flights</td><td style="padding:10px 12px;">{{transport.flightsNeeded}}</td></tr>
                          <tr><td style="padding:10px 12px; color:#334155;">Transfers</td><td style="padding:10px 12px;">{{transport.localTransfers}}</td></tr>
                          <tr><td style="padding:10px 12px; color:#334155;">Accommodation</td><td style="padding:10px 12px;">{{stay.accommodationTier}}{{#if stay.roomingSetup}} • {{stay.roomingSetup}}{{/if}}</td></tr>
                          <tr><td style="padding:10px 12px; color:#334155;">Private Chef</td><td style="padding:10px 12px;">{{stay.privateChef}}</td></tr>
                          <tr><td style="padding:10px 12px; color:#334155;">Meal Plan</td><td style="padding:10px 12px;">{{stay.mealPlan}}</td></tr>
                          {{#if stay.dietaryNeeds}}<tr><td style="padding:10px 12px; color:#334155;">Dietary</td><td style="padding:10px 12px;">{{stay.dietaryNeeds}}</td></tr>{{/if}}
                        </table>
                      </div>

                    </td>
                    <td class="stack" width="50%" style="vertical-align:top; padding-left:12px;">

                      <!-- Trip -->
                      <div style="margin-bottom:14px; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                        <div style="background:#f9fafb; padding:10px 12px; font-weight:700; font-size:13px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">Trip</div>
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                          <tr><td style="padding:10px 12px; width:40%; color:#334155;">Destination</td><td style="padding:10px 12px;">{{trip.destinationCountry}}</td></tr>
                          {{#if trip.citiesPreferred}}
                          <tr>
                            <td style="padding:10px 12px; color:#334155; vertical-align:top;">Cities</td>
                            <td style="padding:10px 12px;">
                              {{#each trip.citiesPreferred}}
                                <span style="display:inline-block; margin:0 6px 6px 0; padding:4px 8px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:999px;">{{this}}</span>
                              {{/each}}
                            </td>
                          </tr>
                          {{/if}}
                          <tr><td style="padding:10px 12px; color:#334155;">Dates</td><td style="padding:10px 12px;">{{startDateFmt}}{{#unless startDateFmt}}{{trip.startDate}}{{/unless}} → {{endDateFmt}}{{#unless endDateFmt}}{{trip.endDate}}{{/unless}}</td></tr>
                          <tr><td style="padding:10px 12px; color:#334155;">Nights</td><td style="padding:10px 12px;">{{trip.tripNights}}</td></tr>
                          <tr><td style="padding:10px 12px; color:#334155;">Lead Time</td><td style="padding:10px 12px;">{{trip.leadTimeDays}} days {{#if trip.rushBooking}}<span style="margin-left:8px; padding:3px 8px; background:#fff7ed; color:#9a3412; border:1px solid #fed7aa; border-radius:999px; font-size:11px;">RUSH</span>{{/if}}</td></tr>
                          {{#if trip.departureCity}}<tr><td style="padding:10px 12px; color:#334155;">Departure</td><td style="padding:10px 12px;">{{trip.departureCity}}, {{trip.departureCountry}}</td></tr>{{/if}}
                          {{#unless trip.departureCity}}<tr><td style="padding:10px 12px; color:#334155;">Departure</td><td style="padding:10px 12px;">{{trip.departureCountry}}</td></tr>{{/unless}}
                        </table>
                      </div>

                      <!-- Experiences -->
                      <div style="margin-bottom:14px; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                        <div style="background:#f9fafb; padding:10px 12px; font-weight:700; font-size:13px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">Experiences</div>
                        <div style="padding:10px 12px; font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                          {{#if experiences.attractionsNG}}
                            <div style="margin-bottom:6px; color:#334155; font-weight:600;">Nigeria</div>
                            <ul style="margin:0 0 10px 18px; padding:0;">
                              {{#each experiences.attractionsNG}}<li style="margin:2px 0;">{{this}}</li>{{/each}}
                            </ul>
                          {{/if}}
                          {{#if experiences.attractionsGH}}
                            <div style="margin-bottom:6px; color:#334155; font-weight:600;">Ghana</div>
                            <ul style="margin:0 0 10px 18px; padding:0;">
                              {{#each experiences.attractionsGH}}<li style="margin:2px 0;">{{this}}</li>{{/each}}
                            </ul>
                          {{/if}}
                          {{#if experiences.entertainmentPrefs}}
                            <div style="margin-bottom:6px; color:#334155; font-weight:600;">Entertainment</div>
                            <ul style="margin:0 0 10px 18px; padding:0;">
                              {{#each experiences.entertainmentPrefs}}<li style="margin:2px 0;">{{this}}</li>{{/each}}
                            </ul>
                          {{/if}}
                          {{#if experiences.otherAttractions}}
                            <div style="margin-top:6px;"><span style="color:#334155; font-weight:600;">Other:</span> {{experiences.otherAttractions}}</div>
                          {{/if}}
                        </div>
                      </div>

                      <!-- Budget & Consent -->
                      <div style="margin-bottom:14px; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                        <div style="background:#f9fafb; padding:10px 12px; font-weight:700; font-size:13px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">Budget &amp; Consent</div>
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                          <tr><td style="padding:10px 12px; width:40%; color:#334155;">Budget</td><td style="padding:10px 12px;">{{budget.currency}} {{budget.budgetMin}} – {{budget.budgetMax}}</td></tr>
                          {{#if budget.paymentPreference}}<tr><td style="padding:10px 12px; color:#334155;">Payment Pref.</td><td style="padding:10px 12px;">{{budget.paymentPreference}}</td></tr>{{/if}}
                          {{#if budget.referral}}<tr><td style="padding:10px 12px; color:#334155;">Referral</td><td style="padding:10px 12px;">{{budget.referral}}</td></tr>{{/if}}
                          <tr><td style="padding:10px 12px; color:#334155;">Consent</td><td style="padding:10px 12px;">T&amp;Cs: {{#if consent.agreeToTerms}}Yes{{else}}No{{/if}} • Marketing: {{#if consent.marketingOptIn}}Yes{{else}}No{{/if}}</td></tr>
                        </table>
                      </div>

                    </td>
                  </tr>
                </table>

                <!-- Logistics & Notes -->
                <div style="margin-top:6px; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden;">
                  <div style="background:#f9fafb; padding:10px 12px; font-weight:700; font-size:13px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">Logistics &amp; Special Requirements</div>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                    {{#if logistics.mobilityNeeds}}<tr><td style="padding:10px 12px; width:20%; color:#334155;">Mobility</td><td style="padding:10px 12px;">{{logistics.mobilityNeeds}}</td></tr>{{/if}}
                    {{#if logistics.medicalNotes}}<tr><td style="padding:10px 12px; color:#334155;">Medical</td><td style="padding:10px 12px;">{{logistics.medicalNotes}}</td></tr>{{/if}}
                    <tr><td style="padding:10px 12px; color:#334155;">Visa</td><td style="padding:10px 12px;">Support needed: {{logistics.visaSupportNeeded}}</td></tr>
                    {{#if logistics.nationality}}<tr><td style="padding:10px 12px; color:#334155;">Nationality</td><td style="padding:10px 12px;">{{logistics.nationality}}</td></tr>{{/if}}
                    {{#if logistics.preferredLanguage}}<tr><td style="padding:10px 12px; color:#334155;">Language</td><td style="padding:10px 12px;">{{logistics.preferredLanguage}}</td></tr>{{/if}}
                    {{#if logistics.contentCaptureConsent}}<tr><td style="padding:10px 12px; color:#334155;">Content</td><td style="padding:10px 12px;">Capture consent: {{logistics.contentCaptureConsent}}</td></tr>{{/if}}
                  </table>
                </div>

                <!-- Message to Planner -->
                {{#if messageToPlanner}}
                <div style="margin-top:12px;">
                  <div style="font:13px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; color:#334155; margin-bottom:6px; font-weight:600;">
                    Message to Planner
                  </div>
                  <div style="font:14px/1.6 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; color:#0f172a; background:#f9fafb; border:1px solid #e5e7eb; border-radius:12px; padding:14px; white-space:pre-wrap;">
                    {{messageToPlanner}}
                  </div>
                </div>
                {{/if}}

                <!-- Quick actions -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin:18px 0 0 0;">
                  <tr>
                    <td align="left" style="padding:0;">
                      <a class="btn" href="mailto:{{contact.email}}?subject=Re:%20Your%20AMITT%20Booking%20Application&body=Hi%20{{contact.firstName}},%0D%0A%0D%0AThanks%20for%20applying!%20Our%20team%20is%20reviewing%20your%20details%20and%20we%E2%80%99ll%20email%20payment%20options%20and%20next%20steps%20shortly." 
                         style="display:inline-block; background:#2563eb; color:#ffffff; padding:10px 14px; border-radius:10px; font:14px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; text-decoration:none; margin-right:8px;">
                        Reply via Email
                      </a>
                      {{#if contact.phone}}
                      <a class="btn" href="tel:{{contact.phone}}" 
                         style="display:inline-block; background:#0ea5e9; color:#ffffff; padding:10px 14px; border-radius:10px; font:14px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; text-decoration:none; margin-right:8px;">
                        Call Contact
                      </a>
                      {{/if}}
                      {{#if adminUrl}}
                      <a class="btn" href="{{adminUrl}}" 
                         style="display:inline-block; background:#10b981; color:#ffffff; padding:10px 14px; border-radius:10px; font:14px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; text-decoration:none;">
                        View in Admin
                      </a>
                      {{/if}}
                    </td>
                  </tr>
                </table>

                <!-- Footer note -->
                <p style="margin:16px 0 0 0; font:12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; color:#64748b;">
                  Auto-notification from the Booking Application form. 
                  {{#if derived.meetsMinGroup}}Min group met{{else}}Min group <em>not</em> met{{/if}} • 
                  {{#if derived.meetsMinNights}}Min nights met{{else}}Min nights <em>not</em> met{{/if}}.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px; background:#ffffff; border-top:1px solid #e5e7eb;">
                <p style="margin:0; font:12px -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; color:#94a3b8;">
                  {{#if brand.name}}{{brand.name}}{{else}}AMITT Travels &amp; Tours{{/if}} {{#if brand.url}}• {{brand.url}}{{/if}}
                </p>
              </td>
            </tr>
          </table>
          <!-- /Card -->
        </td>
      </tr>
    </table>
  </body>
</html>
`;
