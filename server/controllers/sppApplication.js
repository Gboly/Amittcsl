import SppApplication from "../models/sppApplication.js";
import {
  sendApplicationEmail,
  setSppApplicationData,
} from "../util/helpers.js";

export const saveSppApplication = async (req, res) => {
  const data = req.body;
  const formData = setSppApplicationData(data);

  try {
    const application = new SppApplication(formData);
    await application.save();
    await sendApplicationEmail(
      formData,
      "Supply & Procurement Solutions",
      "sppApplication"
    );

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
