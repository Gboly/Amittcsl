export const sppApplicationTemplate = `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Supply & Procurement Application</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    h1 {
      text-align: center;
      color: #4CAF50;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .content {
      margin-bottom: 20px;
    }
    .content p {
      font-size: 16px;
    }
    .service-section {
      margin-top: 20px;
      padding-left: 20px;
    }
    .service-section ul {
      list-style-type: none;
      padding-left: 0;
    }
    .service-section li {
      margin-bottom: 10px;
    }
    .footer {
      text-align: center;
      margin-top: 40px;
      font-size: 14px;
      color: #888;
    }
    .footer a {
      color: #4CAF50;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Supply & Procurement Application</h1>
    </div>

    <div class="content">
      <p><strong>Dear Team,</strong></p>
      <p>A new application has been received for our Supply & Procurement Service. Below are the details:</p>

      <h3>Organisation Details:</h3>
      <ul>
        <li><strong>Organisation / Business Name:</strong> {{organisationName}}</li>
        <li><strong>Entity Type:</strong> {{entityType}}</li>
        <li><strong>Contact Person:</strong> {{contactPerson}}</li>
        <li><strong>Designation / Role:</strong> {{designation}}</li>
        <li><strong>Email:</strong> {{email}}</li>
        <li><strong>Phone:</strong> {{phone}}</li>
        <li><strong>Office Address:</strong> {{officeAddress}}</li>
        {{#if website}}
          <li><strong>Website:</strong> {{website}}</li>
        {{/if}}
      </ul>

      <h3>Services Requested:</h3>
      <ul>
        {{#if services.sourcingVendor}}
          <li><strong>Sourcing & Vendor Selection</strong></li>
          <div class="service-section">
            <ul>
              <li><strong>Primary Requirement:</strong> {{sourcingVendorDetails.primaryRequirement}}</li>
              <li><strong>Category of Product/Service Needed:</strong> {{sourcingVendorDetails.categoryOfProduct}}</li>
              <li><strong>Preferred Supplier Type:</strong> {{sourcingVendorDetails.preferredSupplierType}}</li>
            </ul>
          </div>
        {{/if}}

        {{#if services.procurementManagement}}
          <li><strong>Procurement Management</strong></li>
          <div class="service-section">
            <ul>
              <li><strong>Project Timeline:</strong> {{procurementManagementDetails.projectTimeline}}</li>
              <li><strong>Preferred Delivery Method:</strong> {{procurementManagementDetails.preferredDeliveryMethod}}</li>
            </ul>
          </div>
        {{/if}}

        {{#if services.negotiationCost}}
          <li><strong>Negotiation & Cost Optimization</strong></li>
          <div class="service-section">
            <ul>
              <li><strong>Estimated Budget:</strong> {{negotiationCostDetails.estimatedBudget}}</li>
              <li><strong>Price Range Considerations:</strong> {{negotiationCostDetails.priceRangeConsiderations}}</li>
            </ul>
          </div>
        {{/if}}

        {{#if services.others}}
          <li><strong>Others</strong></li>
          <div class="service-section">
            <ul>
              <li><strong>Details:</strong> {{otherServiceDetails}}</li>
            </ul>
          </div>
        {{/if}}
      </ul>

      {{#if customMessage}}
        <h3>Additional Message:</h3>
        <p>{{customMessage}}</p>
      {{/if}}

      <p>This is an automatic notification for your reference. Kindly review the application details.</p>
    </div>

    <div class="footer">
      <p>If you have any questions, feel free to <a href="mailto:dev@amittcsl.com">contact the dev</a>.</p>
    </div>
  </div>
</body>
</html>`;
