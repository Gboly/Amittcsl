import GiftsApplication from "../models/giftsApplication.js";
import { sendApplicationEmail } from "../util/helpers.js";

export const saveGiftApplication = async (req, res) => {
  const data = req.body;

  try {
    const application = new GiftsApplication(data);
    await application.save();
    await sendApplicationEmail(data, "Corporate Gifts", "giftsApplication");

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
