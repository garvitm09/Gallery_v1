# Google Drive assets on Vercel

This project now loads image/audio assets through `/api/drive-asset` instead of bundling files from `src/Images`. Existing UI, filenames, captions, and image order are preserved.

## 1. Prepare Google Drive
1. In Google Cloud Console, create/select a project and enable **Google Drive API**.
2. Create a service account and generate a JSON key.
3. Create a folder in Google Drive and put all referenced assets in it. Keep the folder private.
4. Share that folder with the service account's `client_email` as **Viewer**.
5. Keep filenames exactly as referenced by the components. Avoid duplicate filenames in the folder. The audio file `Ed Sheeran - Photograph (Official Lyric Video).mp3` is also loaded from Drive.
6. Copy the folder ID from its URL.

## 2. Configure Vercel
In your Vercel project, open **Settings → Environment Variables** and add:
- `GOOGLE_DRIVE_FOLDER_ID`: the folder ID
- `GOOGLE_SERVICE_ACCOUNT_JSON`: the entire contents of the downloaded service-account JSON file, as one JSON value

Add both to Production (and Preview/Development if needed). Never put service-account credentials in `VITE_*` variables or commit the JSON key. Redeploy after setting them.

## 3. Deploy
Commit/push the project to the Git repository connected to Vercel, or run `npm install` and `vercel --prod` from the project root. Vercel automatically deploys the `/api` directory as serverless functions; no separate backend host is needed. Ensure the Vercel project root is the folder containing `package.json`, `api/`, and `vercel.json`.

## 4. Local development
The regular Vite dev server does not execute Vercel Functions. Use `npx vercel dev` after linking the project with `npx vercel`, and configure the environment variables for local development.

## Important privacy note
The Drive folder remains private and the service account reads it server-side. However, this site's chosen access model is “anyone with the website link.” Therefore, the image/audio endpoint also serves assets to visitors who can reach the site; visitors can inspect or save content displayed in their browser. This setup avoids public Google Drive sharing links but does not provide visitor-level access control. For genuinely restricted photos, add login/authentication and authorization to the API.

## Troubleshooting
- `404 Asset not found`: verify the file is directly inside the configured folder and its name matches exactly.
- `409 Multiple files`: rename duplicate files.
- `403` from Google: verify the folder is shared with the service account email and Drive API is enabled.
- `500`: check Vercel Function logs and that the JSON env var is valid.
