import Contact from "../models/contact.js";
import { sendContactEmail } from "../util/helpers.js";

export const contactTeam = async (req, res) => {
  const data = req.body;

  try {
    const application = new Contact(data);
    await application.save();
    await sendContactEmail(data);

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
