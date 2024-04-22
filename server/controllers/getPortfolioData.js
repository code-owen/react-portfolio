import Experience from "../models/experience.model.js";
import Project from "../models/project.model.js";
import Education from "../models/education.model.js";

export const getPortfolioData = async (req, res) => {
  try {
    const experience = await Experience.find();
    const projects = await Project.find(); 
    const education = await Education.find();

    if (
      !experience ||
      !projects ||
      !education
    ) {
      return res.status(400).json("Error while fetching portfolio data");
    }

    return res
      .status(200)
      .json({ experience, projects, education });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server error");
  }
};
