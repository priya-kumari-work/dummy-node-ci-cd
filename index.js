const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Dummy Node.js app deployed using GitHub Actions CI/CD 🚀");
});

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK", service: "Node.js app", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
