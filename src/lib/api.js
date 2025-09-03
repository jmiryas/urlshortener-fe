export async function realShorten(longUrl) {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/v1/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: longUrl }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.shorten_url;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
}
