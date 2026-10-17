
import "dotenv/config";
import express from "express";
import cors from "cors";
import driveAssetHandler from "./api/drive-asset.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow tools such as curl and direct browser navigation.
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
  })
);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.all("/api/drive-asset", (req, res) => {
  return driveAssetHandler(req, res);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Gallery backend listening on port ${PORT}`);
});
