
import { google } from "googleapis";

function getDriveClient() {
  const {
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN,
  } = process.env;

  if (
    !GOOGLE_CLIENT_ID ||
    !GOOGLE_CLIENT_SECRET ||
    !GOOGLE_REFRESH_TOKEN
  ) {
    throw new Error("Missing Google OAuth environment variables");
  }

  const auth = new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET
  );

  auth.setCredentials({
    refresh_token: GOOGLE_REFRESH_TOKEN,
  });

  return google.drive({ version: "v3", auth });
}

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.setHeader("Allow", "GET, HEAD");
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  const name =
    typeof req.query.name === "string" ? req.query.name : "";

  if (
    !name ||
    name.length > 255 ||
    name.includes("/") ||
    name.includes("\\")
  ) {
    return res.status(400).json({
      error: "A valid asset name is required",
    });
  }

  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!folderId) {
    return res.status(500).json({
      error: "Drive folder is not configured",
    });
  }

  try {
    const drive = getDriveClient();

    const escapeQuery = (value) =>
      value.replace(/\\/g, "\\\\").replace(/'/g, "\\'");

    const result = await drive.files.list({
      q:
        `name = '${escapeQuery(name)}' and ` +
        `'${escapeQuery(folderId)}' in parents and trashed = false`,
      fields: "files(id,name,mimeType,size)",
      pageSize: 10,
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
    });

    const files = result.data.files ?? [];

    if (files.length === 0) {
      return res.status(404).json({
        error: "Asset not found in Drive folder",
      });
    }

    if (files.length > 1) {
      return res.status(409).json({
        error: "Duplicate filenames found in Drive",
      });
    }

    const file = files[0];

    const allowed =
      /^(image\/(jpeg|png|gif|webp|avif|svg\+xml)|audio\/(mpeg|mp4|ogg|wav|webm))$/i;

    if (!allowed.test(file.mimeType || "")) {
      return res.status(415).json({
        error: "Unsupported image or audio format",
      });
    }

    res.setHeader("Content-Type", file.mimeType);
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Content-Disposition", "inline");

    // Do not cache private Drive assets in shared caches.
    res.setHeader("Cache-Control", "private, no-store");

    if (file.size) {
      res.setHeader("Content-Length", file.size);
    }

    if (req.method === "HEAD") {
      return res.status(200).end();
    }

    const media = await drive.files.get(
      {
        fileId: file.id,
        alt: "media",
        supportsAllDrives: true,
      },
      {
        responseType: "stream",
      }
    );

    media.data.on("error", (error) => {
      console.error("Drive stream error:", error.message);

      if (!res.headersSent) {
        res.status(502);
      }

      res.end();
    });

    media.data.pipe(res);
  } catch (error) {
    console.error("Drive asset request failed:", error.message);

    if (!res.headersSent) {
      return res.status(500).json({
        error: "Unable to load asset from Google Drive",
      });
    }

    res.end();
  }
}
