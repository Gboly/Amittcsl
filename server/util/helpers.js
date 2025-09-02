import { transporter } from "../config/nodemailer.config.js";
import dotenv from "dotenv";
dotenv.config();

export const sendApplicationEmail = async (formData, type, template) => {
  const mailOptions = {
    from: '"Amittcsl Dev" <dev@amittcsl.com>', // Your email address
    to: "info@amittcsl.com", // Recipient's email address
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
