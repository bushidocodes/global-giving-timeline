const express = require("express");
const cors = require("cors");
const organizations = require("./data/organizations");
const posts = require("./data/posts");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Replicate: GET /dev/getorganizations
// Returns an object keyed by OrgId, matching what Select.js maps over.
app.get("/dev/getorganizations", (req, res) => {
  res.json(organizations);
});

// Replicate: GET /dev/getorgbyposttest?orgId=X
// Returns an array of timeline posts for the given org, oldest first.
app.get("/dev/getorgbyposttest", (req, res) => {
  const { orgId } = req.query;

  if (!orgId) {
    return res.status(400).json({ error: "orgId query parameter is required" });
  }

  if (!organizations[orgId]) {
    return res.status(404).json({ error: `Unknown orgId: ${orgId}` });
  }

  const orgPosts = posts[orgId] || [];
  const sorted = [...orgPosts].sort((a, b) => a.Timestamp - b.Timestamp);
  res.json(sorted);
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
  console.log(`  GET http://localhost:${PORT}/dev/getorganizations`);
  console.log(`  GET http://localhost:${PORT}/dev/getorgbyposttest?orgId=4497`);
});
