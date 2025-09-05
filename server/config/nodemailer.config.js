import nodemailer from "nodemailer";
//import nodemailerExpressHandlebars from "nodemailer-express-handlebars";
import dotenv from "dotenv";
dotenv.config();

// import fs from "fs";
// import path from "path";

// const templatePath = path.join(
//   process.cwd(), // repo root on Vercel
//   "server",
//   "email-templates",
//   "ssmApplication.handlebars"
// );

// if (!fs.existsSync(templatePath)) {
//   console.error("Template not found at:", templatePath);
//   // optionally try a fallback based on __dirname if your file layout differs
// }

//const source = fs.readFileSync(templatePath, "utf8");

// Configure your email service (example for Gmail with OAuth or your custom SMTP)
export const transporter = nodemailer.createTransport({
  service: "gmail",
  // host: "smtp.gmail.com",
  // port: 587, // Use port 587 for TLS (instead of 465 for SSL)
  // secure: false, // false for TLS, true for SSL
  auth: {
    user: process.env.GMAIL, // Your Zoho email address
    pass: process.env.GPASS, // The Zoho App Password you generated
  },
  // connectionTimeout: 60000, // Set connection timeout to 60 seconds
  // socketTimeout: 60000, // Set socket timeout to 60 seconds
});

// const handlebarOptions = {
//   viewEngine: {
//     extName: ".handlebars",
//     partialsDir: templatePath, // Path where your Handlebars templates are stored
//     defaultLayout: false,
//   },
//   viewPath: templatePath,
// };

//transporter.use("compile", nodemailerExpressHandlebars(handlebarOptions));
