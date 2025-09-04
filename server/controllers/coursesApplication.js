import CoursesApplication from "../models/coursesApplication.js";
import {
  sendApplicationEmail,
  setCoursesApplicationData,
} from "../util/helpers.js";

export const saveCoursesApplication = async (req, res) => {
  const data = req.body;
  const formData = setCoursesApplicationData(data);

  try {
    const application = new CoursesApplication(formData);
    await application.save();
    await sendApplicationEmail(
      formData,
      "Professional Courses",
      "coursesApplication"
    );

    return res.status(200).json(application);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
