import SsmApplication from "../models/ssmApplication.js";
import { sendApplicationEmail } from "../util/helpers.js";

export const saveSsmApplication = async (req, res) => {
  const data = req.body;

  try {
    const application = new SsmApplication(data);
    console.log(data);
    await application.save();
    await sendApplicationEmail(
      data,
      "Stocks, Shares and Mutual Funds",
      "ssmApplication"
    );

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
