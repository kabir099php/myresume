import express from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { handleContact } from "./contact.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;

// The built React app lives in client/dist (created by `npm run build`).
const clientDist = path.resolve(__dirname, "..", "client", "dist");

/* ----------------------------- middleware ----------------------------- */
app.use(
  helmet({
    // Allow inline styles/scripts produced by the Vite bundle.
    contentSecurityPolicy: false,
  })
);
app.use(compression());
app.use(cors());
app.use(express.json({ limit: "100kb" }));

// Trust the reverse proxy (Nginx) so rate-limit & secure cookies work.
app.set("trust proxy", 1);

/* ------------------------------- API ---------------------------------- */
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", apiLimiter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "kabir-portfolio", time: new Date().toISOString() });
});

app.post("/api/contact", handleContact);

/* --------------------- serve the built React app ---------------------- */
app.use(express.static(clientDist));

// SPA fallback: send index.html for any non-API route.
// Express 5 uses path-to-regexp v8 — use a named wildcard, not "*".
app.get("/{*splat}", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  res.sendFile(path.join(clientDist, "index.html"));
});

app.listen(PORT, () => {
  console.log(`\n  Kabir Portfolio server running on http://localhost:${PORT}\n`);
});
