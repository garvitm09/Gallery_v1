
require("dotenv").config();
const { google } = require("googleapis");
const http = require("http");
const { URL } = require("url");

const REDIRECT_URI = "http://localhost:3000/oauth2callback";
const SCOPES = [
  "https://www.googleapis.com/auth/drive.readonly",
];

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  REDIRECT_URI
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: SCOPES,
});

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, REDIRECT_URI);

  if (url.pathname !== "/oauth2callback") {
    res.writeHead(404);
    return res.end("Not found");
  }

  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (error || !code) {
    res.writeHead(400);
    return res.end("Google authorization failed. You can close this tab.");
  }

  try {
    const { tokens } = await oauth2Client.getToken(code);

    console.log("\nOAuth tokens received:");
    console.log(JSON.stringify(tokens, null, 2));

    if (!tokens.refresh_token) {
      console.log(
        "\nNo refresh token returned. Revoke the previous app grant " +
        "and authorize again with prompt=consent."
      );
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Authorization complete. Check your terminal.");
  } catch (err) {
    console.error(err.message);
    res.writeHead(500);
    res.end("Token exchange failed. Check the terminal.");
  } finally {
    server.close();
  }
});

server.listen(3000, "localhost", () => {
  console.log("Open this URL to authorize your gallery:\n");
  console.log(authUrl);
});
