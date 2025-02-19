const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const aiService = require("./aiService");

class ResumeService {
  async createAIResume(userId, jobTitle, experience, skills) {
    const prompt = `Job Title: ${jobTitle}\nExperience: ${experience}\nSkills: ${skills}`;
    const content = await aiService.generateResumeContent(prompt);

    const resume = await prisma.resume.create({
      data: {
        userId,
        content,
        jobTitle,
        experience,
        skills,
        generatedBy: "ai",
      },
    });

    return resume;
  }
}

module.exports = new ResumeService();
