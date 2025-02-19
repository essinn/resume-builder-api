const express = require("express");
const resumeRoutes = require("./routes/resumeRoutes");
const errorHandler = require("./utils/errorHandler");
const config = require("./config/config");

const app = express();

// middleware
app.use(express.json());

app.use("/api/v1/resumes", resumeRoutes);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log("Server running on port: ", config.port);
});
