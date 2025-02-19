const resumeService = require("../services/resumeService");

class ResumeController {
  async generateResume(req, res) {
    try {
      const { userId, jobTitle, experience, skills } = req.body;

      if (!userId || !jobTitle || !experience || !skills) {
        return res.status(400).json({ error: "Please fill in all fields" });
      }

      const createResume = await resumeService.createAIResume(
        userId,
        jobTitle,
        experience,
        skills
      );
      res.status(201).json(createResume);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ResumeController();
