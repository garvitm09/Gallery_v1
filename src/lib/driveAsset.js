const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export function driveAsset(fileName) {
  return `${API_BASE_URL}/api/drive-asset?name=${encodeURIComponent(fileName)}`;
}