export function normalizeUrl(raw) {
  if (!raw) return "";
  raw = raw.trim();
  try {
    const url = new URL(raw);
    return url.href;
  } catch {
    try {
      const url2 = new URL("http://" + raw);
      return url2.href;
    } catch {
      return "";
    }
  }
}
