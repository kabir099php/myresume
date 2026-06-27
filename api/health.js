// Vercel serverless function: GET /api/health
module.exports = function handler(_req, res) {
  res.status(200).json({
    status: "ok",
    service: "kabir-portfolio",
    time: new Date().toISOString(),
  });
};
