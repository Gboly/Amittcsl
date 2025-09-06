import FsCoursesApplication from "../models/fsApplication.js";
import { sendApplicationEmail, setFsCoursesData } from "../util/helpers.js";

export const saveFsApplication = async (req, res) => {
  const data = req.body;
  const formData = setFsCoursesData(data);

  try {
    const application = new FsCoursesApplication(formData);
    await application.save();
    await sendApplicationEmail(formData, "Financial Academy", "fsApplication");

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
