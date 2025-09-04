import { transporter } from "../config/nodemailer.config.js";
import dotenv from "dotenv";
dotenv.config();

export const sendApplicationEmail = async (formData, type, template) => {
  const mailOptions = {
    from: '"Amittcsl Dev" <dev@amittcsl.com>', // Your email address
    to: "dev@amittcsl.com", // Recipient's email address
    subject: `New Application Submitted: ${type}`,
    template, // Name of the template you created
    context: formData, // Pass the form data to the template
  };

  // Send the email
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

export const setSppApplicationData = (formData) => ({
  prefix: formData.prefix,
  name: formData.name,
  surname: formData.surname,
  email: formData.email,
  phone: formData.phone,
  services: {
    sourcingVendor: formData.serviceSourcingVendor || false,
    procurementManagement: formData.serviceProcurementManagement || false,
    negotiationCost: formData.serviceNegotiationCost || false,
    others: formData.serviceOthers || false,
  },
  sourcingVendorDetails: formData.serviceSourcingVendor
    ? {
        primaryRequirement: formData.primaryRequirement,
        categoryOfProduct: formData.categoryOfProduct,
        preferredSupplierType: formData.preferredSupplierType,
      }
    : undefined,
  procurementManagementDetails: formData.serviceProcurementManagement
    ? {
        projectTimeline: formData.projectTimeline,
        preferredDeliveryMethod: formData.preferredDeliveryMethod,
      }
    : undefined,
  negotiationCostDetails: formData.serviceNegotiationCost
    ? {
        estimatedBudget: formData.estimatedBudget,
        priceRangeConsiderations: formData.priceRangeConsiderations,
      }
    : undefined,
  otherServiceDetails: formData.serviceOthers
    ? formData.customMessage
    : undefined,
  declarationConfirmed: formData.declarationConfirmed || false,
});

export const setFadApplicationData = (formData) => ({
  prefix: formData.prefix,
  name: formData.name,
  middleName: formData.middleName,
  surname: formData.surname,
  gender: formData.gender,
  dob: formData.dob,
  address: formData.address,
  phone: formData.phone,
  email: formData.email,
  services: {
    capitalFunding: formData.serviceCapitalFunding || false,
    portfolioDiversification: formData.servicePortfolioDiversification || false,
    accountingCompliance: formData.serviceAccountingCompliance || false,
    others: formData.serviceOthers || false,
  },

  capitalFundingDetails: formData.serviceCapitalFunding
    ? {
        primaryGoal: formData.primaryGoal,
        investmentFocus: formData.investmentFocus,
        timeline: formData.timeline,
      }
    : undefined,

  portfolioDiversificationDetails: formData.servicePortfolioDiversification
    ? {
        currentPortfolioAllocation: formData.currentPortfolioAllocation,
        riskTolerance: formData.riskTolerance,
        desiredOutcome: formData.desiredOutcome,
      }
    : undefined,

  accountingComplianceDetails: formData.serviceAccountingCompliance
    ? {
        governmentOrAgency: formData.governmentOrAgency,
        serviceType: formData.serviceType,
      }
    : undefined,

  otherServiceDetails: formData.serviceOthers
    ? formData.otherServiceDetails || ""
    : undefined,

  customMessage: formData.customMessage,
  declarationConfirmed: formData.declarationConfirmed || false,
});

// utils/mapApplicationData.js

/**
 * Maps frontend formData + selectedCourse into the proper structure
 * for ProfessionalCourseApplication mongoose model.
 */
export function setCoursesApplicationData(formData) {
  // Base applicant info
  const baseData = {
    prefix: formData.prefix,
    name: formData.name,
    surname: formData.surname,
    email: formData.email,
    phone: formData.phone,
    courseId: formData.courseId,
    courseTitle: formData.selectedCourse,
    customMessage: formData.customMessage || "",
  };

  // Map course-specific fields into the correct sub-schema
  const courseSpecific = {};

  switch (formData.courseId) {
    case "customer-service-training":
      courseSpecific.customerServiceTraining = {
        primaryGoal: formData.primaryGoal,
        currentRole: formData.currentRole,
        customerServiceExperience: formData.customerServiceExperience,
        customerServiceChallenges: formData.customerServiceChallenges,
        preferredCohort: formData.preferredCohort,
      };
      break;

    case "the-power-of-professionalism":
      courseSpecific.professionalism = {
        currentJobRole: formData.currentJobRole,
        professionalGoals: formData.professionalGoals,
        professionalismLevel: formData.professionalismLevel,
        preferredCohort: formData.preferredCohort,
      };
      break;

    case "introduction-to-team-leadership":
      courseSpecific.teamLeadership = {
        leadershipExperience: formData.leadershipExperience,
        leadershipChallenges: formData.leadershipChallenges,
        leadershipStyle: formData.leadershipStyle,
        preferredCohort: formData.preferredCohort,
      };
      break;

    case "essential-management":
      courseSpecific.management = {
        managementExperience: formData.managementExperience,
        managementStyle: formData.managementStyle,
        managementChallenges: formData.managementChallenges,
        preferredCohort: formData.preferredCohort,
      };
      break;

    case "emotional-intelligence-at-workplace":
      courseSpecific.emotionalIntelligence = {
        emotionalIntelligenceLevel: formData.emotionalIntelligenceLevel,
        emotionalChallenges: formData.emotionalChallenges,
        preferredCohort: formData.preferredCohort,
      };
      break;

    case "ambition-root-of-achievement":
      courseSpecific.ambition = {
        careerGoals: formData.careerGoals,
        careerMotivation: formData.careerMotivation,
        ambitionLevel: formData.ambitionLevel,
        preferredCohort: formData.preferredCohort,
      };
      break;

    default:
      throw new Error(`Unsupported courseId: ${formData.courseId}`);
  }

  return { ...baseData, ...courseSpecific };
}
