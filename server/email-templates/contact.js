export const contactTemplate = `<html lang="en" style="margin:0; padding:0; background:#f5f7fb;">
  <head>
    <meta charset="utf-8" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Website Message</title>
    <style>
      /* Some clients honor <style>; we still inline critical rules below */
      @media (max-width: 600px) {
        .card { width: 100% !important; }
        .content { padding: 16px !important; }
        .stack { display:block !important; width:100% !important; }
        .btn { display:block !important; width:100% !important; margin-bottom:8px !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:#f5f7fb; color:#0f172a;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#f5f7fb; padding:24px 12px;">
      <tr>
        <td align="center">
          <!-- Card -->
          <table class="card" role="presentation" cellspacing="0" cellpadding="0" border="0" width="640" style="max-width:640px; width:640px; background:#ffffff; border:1px solid #e5e7eb; border-radius:16px; overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="background:#0f172a; color:#ffffff; padding:20px 24px;">
                <table width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="vertical-align:middle;">
                      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:18px; font-weight:700; margin:0;">
                        New Website Message
                      </div>
                      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; opacity:0.85; margin-top:6px;">
                        {{#if brand.name}}{{brand.name}}{{else}}Your Website{{/if}} — a visitor just reached out.
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
                <!-- Intro -->
                <p style="margin:0 0 14px 0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:15px; line-height:1.5;">
                  Hi team, a new contact message just came in from
                  <strong>
                    {{#if lastName}}{{firstName}} {{lastName}}{{else}}{{firstName}}{{/if}}
                  </strong>.
                </p>

                <!-- Summary Chips -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:0 0 16px 0;">
                  <tr>
                    <td class="stack" style="padding:0; vertical-align:top;">
                      <div style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#eef2ff; color:#3730a3; border-radius:999px; font-size:12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                        From: {{#if lastName}}{{firstName}} {{lastName}}{{else}}{{firstName}}{{/if}}
                      </div>
                      <div style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#ecfeff; color:#155e75; border-radius:999px; font-size:12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                        Email: {{email}}
                      </div>
                      {{#if phone}}
                      <div style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#f0fdf4; color:#166534; border-radius:999px; font-size:12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                        Phone: {{phone}}
                      </div>
                      {{/if}}
                      {{#if receivedAt}}
                      <div style="display:inline-block; margin:0 8px 8px 0; padding:6px 10px; background:#fff7ed; color:#9a3412; border-radius:999px; font-size:12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
                        Received: {{receivedAt}}
                      </div>
                      {{/if}}
                    </td>
                  </tr>
                </table>

                <!-- Details Table -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; margin:0 0 16px 0;">
                  <tr style="background:#f9fafb;">
                    <td width="160" style="padding:10px 12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#334155; border-bottom:1px solid #e5e7eb;"><strong>Name</strong></td>
                    <td style="padding:10px 12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#0f172a; border-bottom:1px solid #e5e7eb;">
                      {{#if lastName}}{{firstName}} {{lastName}}{{else}}{{firstName}}{{/if}}
                    </td>
                  </tr>
                  <tr>
                    <td width="160" style="padding:10px 12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#334155; border-bottom:1px solid #e5e7eb;"><strong>Email</strong></td>
                    <td style="padding:10px 12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#0f172a; border-bottom:1px solid #e5e7eb;">
                      <a href="mailto:{{email}}" style="color:#2563eb; text-decoration:none;">{{email}}</a>
                    </td>
                  </tr>
                  {{#if phone}}
                  <tr>
                    <td width="160" style="padding:10px 12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#334155; border-bottom:1px solid #e5e7eb;"><strong>Phone</strong></td>
                    <td style="padding:10px 12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#0f172a; border-bottom:1px solid #e5e7eb;">
                      <a href="tel:{{phone}}" style="color:#2563eb; text-decoration:none;">{{phone}}</a>
                    </td>
                  </tr>
                  {{/if}}
                  {{#if receivedAt}}
                  <tr>
                    <td width="160" style="padding:10px 12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#334155;"><strong>Received</strong></td>
                    <td style="padding:10px 12px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#0f172a;">
                      {{receivedAt}}
                    </td>
                  </tr>
                  {{/if}}
                </table>

                <!-- Message -->
                <div style="margin:0 0 18px 0;">
                  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:13px; color:#334155; margin:0 0 6px 0; font-weight:600;">
                    Message
                  </div>
                  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:14px; line-height:1.6; color:#0f172a; background:#f9fafb; border:1px solid #e5e7eb; border-radius:12px; padding:14px; white-space:pre-wrap;">
                    {{message}}
                  </div>
                </div>

                <!-- Actions -->
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin:6px 0 0 0;">
                  <tr>
                    <td align="left" style="padding:0;">
                      <a class="btn" href="mailto:{{email}}?subject=Re:%20Your%20Message&body=Hi%20{{firstName}},%0D%0A%0D%0AThanks%20for%20contacting%20us..." 
                         style="display:inline-block; background:#2563eb; color:#ffffff; padding:10px 14px; border-radius:10px; font-size:14px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; text-decoration:none; margin-right:8px;">
                        Reply via Email
                      </a>
                      {{#if phone}}
                      <a class="btn" href="tel:{{phone}}" 
                         style="display:inline-block; background:#0ea5e9; color:#ffffff; padding:10px 14px; border-radius:10px; font-size:14px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; text-decoration:none; margin-right:8px;">
                        Call Now
                      </a>
                      {{/if}}
                      {{#if adminUrl}}
                      <a class="btn" href="{{adminUrl}}" 
                         style="display:inline-block; background:#10b981; color:#ffffff; padding:10px 14px; border-radius:10px; font-size:14px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; text-decoration:none;">
                        View in Admin
                      </a>
                      {{/if}}
                    </td>
                  </tr>
                </table>

                <!-- Note -->
                <p style="margin:16px 0 0 0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:12px; color:#64748b;">
                  This notification was generated from your website’s “Send Us A Message” form.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:16px 24px; background:#ffffff; border-top:1px solid #e5e7eb;">
                <p style="margin:0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif; font-size:12px; color:#94a3b8;">
                  {{#if brand.name}}{{brand.name}}{{else}}Your Company{{/if}} • {{#if brand.url}}{{brand.url}}{{else}}example.com{{/if}}
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
