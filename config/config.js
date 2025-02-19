require("dotenv").config();

module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  openaiKey: process.env.OPENAI_KEY,
  port: process.env.PORT || 3000,
};
