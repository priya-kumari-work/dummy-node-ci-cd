const express = require("express");
const app = express();

const PORT = process.env.PORT || 80;

app.get("/", (req, res) => {
  res.send("Dummy Node.js app deployed using GitHub Actions CI/CD 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "dummy-node-ci-cd",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
