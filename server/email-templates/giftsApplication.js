export const giftsApplicationTemplate = `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Client Application</title>
      <style>
      /* ==== Basic reset for email clients ==== */
      body, table, td, div, p, a { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Arial, sans-serif; }
      body { margin:0; padding:0; background:#f5f7fb; color:#0f172a; }
      img { border:0; outline:none; text-decoration:none; max-width:100%; }
      a { color:#2563eb; text-decoration:none; }
      .container { width:100%; background:#f5f7fb; padding:24px 12px; }
      .card { max-width:640px; margin:0 auto; background:#ffffff; border-radius:16px; border:1px solid #e5e7eb; overflow:hidden; }
      .header { background:#0f172a; color:#ffffff; padding:20px 24px; }
      .title { font-size:18px; font-weight:700; margin:0; }
      .sub { font-size:13px; opacity:0.85; margin:6px 0 0 0; }
      .content { padding:20px 24px; }
      .section-title { font-size:16px; font-weight:700; margin:0 0 8px 0; }
      .kvs { width:100%; border-collapse:collapse; margin:8px 0 16px; }
      .kvs th, .kvs td { text-align:left; vertical-align:top; padding:10px 12px; border-top:1px solid #eef2f7; font-size:14px; }
      .kvs th { width:200px; color:#334155; font-weight:600; background:#fafafa; }
      .badge { display:inline-block; padding:6px 10px; border-radius:999px; background:#eef2ff; color:#3730a3; font-size:12px; font-weight:600; margin:4px 6px 0 0; }
      .muted { color:#475569; }
      .divider { height:1px; background:#f1f5f9; margin:16px 0; }
      .foot { padding:16px 24px 22px; background:#f8fafc; color:#64748b; font-size:12px; text-align:center; }
      .code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace; background:#f1f5f9; padding:2px 6px; border-radius:6px; }
      .pill { display:inline-block; padding:2px 8px; border-radius:999px; font-size:12px; font-weight:700; }
      .pill-yes { background:#ecfdf5; color:#065f46; }
      .pill-no { background:#fef2f2; color:#991b1b; }
      .blockquote { border-left:4px solid #e2e8f0; padding:10px 12px; background:#f8fafc; border-radius:8px; white-space:pre-line; }
      /* Mobile tweaks */
      @media (max-width: 480px) {
        .header, .content, .foot { padding-left:16px; padding-right:16px; }
        .kvs th { width:140px; }
      }
    </style>
</head>
<body>
  <h2>A client needs your Corporate gifts service</h2>
    <p class="section-title">Organisation Summary</p>
            <table class="kvs" role="presentation">
              <tr>
                <th>Organisation / Business</th>
                <td>{{organisationName}}</td>
              </tr>
              <tr>
                <th>Entity Type</th>
                <td>{{entityType}}</td>
              </tr>
              <tr>
                <th>Contact Person</th>
                <td>{{contactPerson}}</td>
              </tr>
              <tr>
                <th>Designation / Role</th>
                <td>{{designation}}</td>
              </tr>
              <tr>
                <th>Office Address</th>
                <td>{{officeAddress}}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td><a href="mailto:{{email}}">{{email}}</a></td>
              </tr>
              <tr>
                <th>Phone</th>
                <td><a href="tel:{{phone}}">{{phone}}</a></td>
              </tr>
              {{#if website}}
              <tr>
                <th>Website</th>
                <td><a href="{{website}}">{{website}}</a></td>
              </tr>
              {{/if}}
              <tr>
                <th>Declaration</th>
                <td>
                  {{#if declarationConfirmed}}
                    <span class="pill pill-yes">✓ Confirmed</span>
                  {{else}}
                    <span class="pill pill-no">✗ Not confirmed</span>
                  {{/if}}
                </td>
              </tr>
            </table>

  {{#if serviceFestive}}
    <h3>Festive Gifts Details</h3>
    <p><strong>Occasion:</strong> {{occasion}}</p>
    <p><strong>Preferred Gift Type:</strong> {{preferredGiftType}}</p>
  {{/if}}

  {{#if serviceMilestone}}
    <h3>Milestone Gifts Details</h3>
    <p><strong>Milestone Type:</strong> {{milestoneType}}</p>
    <p><strong>Personalized Items:</strong> {{personalizedItems}}</p>
  {{/if}}

  {{#if serviceStaffAppreciation}}
    <h3>Birthday Surprises Details</h3>
    <p><strong>Award Category:</strong> {{awardCategory}}</p>
    <p><strong>Preferred Award Type:</strong> {{preferredAwardType}}</p>
  {{/if}}

  {{#if serviceHampers}}
    <h3>Corporate Hampers Details</h3>
    <p><strong>Preferred Hampers:</strong> {{preferredHampers}}</p>
    <p><strong>Branding Preferences:</strong> {{brandingPreferences}}</p>
  {{/if}}

  <p><strong>Custom Message:</strong> {{customMessage}}</p>
</body>
</html>`;
