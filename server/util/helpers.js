import { transporter } from "../config/nodemailer.config.js";
import dotenv from "dotenv";
dotenv.config();
import exphbs from "express-handlebars";
import { ssmApplicationTemplate } from "../email-templates/ssmApplication.js";
import { sppApplicationTemplate } from "../email-templates/sppApplication.js";
import { giftsApplicationTemplate } from "../email-templates/giftsApplication.js";
import { fsApplicationTemplate } from "../email-templates/fsApplication.js";
import { feeApplicationTemplate } from "../email-templates/feeApplication.js";
import { fadApplicationTemplate } from "../email-templates/fadApplication.js";
import { coursesApplicationTemplate } from "../email-templates/coursesApplication.js";
import { contactTemplate } from "../email-templates/contact.js";

// Register an in-memory Handlebars instance
const hbs = exphbs.create({});

// Map templates
const templates = {
  ssmApplication: ssmApplicationTemplate,
  sppApplication: sppApplicationTemplate,
  giftsApplication: giftsApplicationTemplate,
  fsApplication: fsApplicationTemplate,
  feeApplication: feeApplicationTemplate,
  fadApplication: fadApplicationTemplate,
  coursesApplication: coursesApplicationTemplate,
};
export const sendApplicationEmail = async (formData, type, template) => {
  const source = templates[template];
  if (!source) {
    throw new Error(`Template "${template}" not found`);
  }

  // Compile in memory
  const compiled = hbs.handlebars.compile(source);
  const html = compiled(formData);

  const mailOptions = {
    from: '"Amittcsl Dev" <dev@amittcsl.com>', // Your email address
    to: "dev@amittcsl.com", // Recipient's email address
    subject: `New Application Submitted: ${type}`,
    html,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

export const sendContactEmail = async (formData) => {
  // Compile in memory
  const compiled = hbs.handlebars.compile(contactTemplate);
  const html = compiled(formData);

  const mailOptions = {
    from: '"Amittcsl Dev" <dev@amittcsl.com>', // Your email address
    to: "dev@amittcsl.com", // Recipient's email address
    subject: `A client has just contacted us`,
    html,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

export const setSppApplicationData = (formData) => ({
  organisationName: formData.organisationName,
  entityType: formData.entityType, // "SME" | "Corporate Organisation" | "Government Agency" | "Other"
  contactPerson: formData.contactPerson, // Full name of the primary contact
  designation: formData.designation, // Role/Title of the contact
  email: formData.email,
  phone: formData.phone,
  officeAddress: formData.officeAddress,
  website: formData.website, // optional

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
  organisationName: formData.organisationName,
  entityType: formData.entityType,
  contactPerson: formData.contactPerson,
  designation: formData.designation,
  officeAddress: formData.officeAddress,
  phone: formData.phone,
  email: formData.email,
  website: formData.website,
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

export const setFsCoursesData = (formData) => {
  const courseData = {};

  // Map selectedCourse to courseTitle
  switch (formData.courseId) {
    case "fsa":
      courseData.courseTitle = "Financial Stewards Academy";
      courseData.fsa = {
        primaryGoal: formData.primaryGoal,
        financeExperience: formData.financeExperience,
        preferredCohort: formData.preferredCohort,
      };
      break;
    case "money-playbook":
      courseData.courseTitle = "Money Playbook";
      courseData.moneyPlaybook = {
        moneyChallenge: formData.moneyChallenge,
        moneyManagementStyle: formData.moneyManagementStyle,
        courseOutcome: formData.courseOutcome,
        preferredCohort: formData.preferredCohort,
      };
      break;
    case "leaving-home":
      courseData.courseTitle = "Leaving Home";
      courseData.leavingHome = {
        interestInLeavingHome: formData.interestInLeavingHome,
        struggleArea: formData.struggleArea,
        challengeApproach: formData.challengeApproach,
        preferredCohort: formData.preferredCohort,
      };
      break;
    default:
      throw new Error("Invalid course ID");
  }

  // Map other personal fields from formData
  courseData.firstName = formData.firstName;
  courseData.lastName = formData.lastName || "";
  courseData.email = formData.email;
  courseData.phone = formData.phone;
  courseData.country = formData.country;
  courseData.city = formData.city;
  courseData.ageRange = formData.ageRange || "";
  courseData.occupation = formData.occupation || "";
  courseData.message = formData.message || "";
  courseData.courseId = formData.courseId;

  return courseData;
};
