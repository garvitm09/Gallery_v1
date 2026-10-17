/** Returns a same-origin Vercel Function URL for an asset stored in the private Drive folder. */
export function driveAsset(fileName) {
  return `/api/drive-asset?name=${encodeURIComponent(fileName)}`;
}
