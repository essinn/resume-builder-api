const { Configuration, OpenAIApi } = require("openai");

class AIService {
  constructor() {
    const config = new Configuration({
      apiKey: process.env.OPENAI_KEY,
    });
    this.openai = new OpenAIApi(config);
  }

  async generateResumeContent(prompt) {
    try {
      const res = await this.openai.createChatCompletions({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `Generate professional resume content for: ${prompt}`,
          },
        ],
      });

      return res.data.choices[0].message.conent;
    } catch (error) {
      throw new Error("Failed to generate resume content");
    }
  }
}

module.exports = new AIService();
