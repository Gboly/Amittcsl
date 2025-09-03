import FadApplication from "../models/fadApplication.js";
import {
  sendApplicationEmail,
  setFadApplicationData,
} from "../util/helpers.js";

export const saveFadApplication = async (req, res) => {
  const data = req.body;
  const formData = setFadApplicationData(data);

  try {
    const application = new FadApplication(formData);
    await application.save();
    await sendApplicationEmail(
      formData,
      "Financial Advisory",
      "fadApplication"
    );

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
