import TravelApplication from "../models/coursesApplication.js";
import {
  sendApplicationEmail,
  setTravelApplicationData,
} from "../util/helpers.js";

export const saveTravelApplication = async (req, res) => {
  const data = req.body;
  const formData = setTravelApplicationData(data);

  try {
    const application = new TravelApplication(formData);
    await application.save();
    await sendApplicationEmail(formData, "Travel & Tours", "travelApplication");

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
