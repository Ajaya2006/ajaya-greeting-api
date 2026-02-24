export default function handler(req, res) {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const hour = now.getHours();
  let greeting = "";
  let emoji = "";
  let bgColor = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning";
    emoji = "☀️";
    bgColor = "#FBBF24";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
    emoji = "🌤️";
    bgColor = "#60A5FA";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening";
    emoji = "🌇";
    bgColor = "#A78BFA";
  } else {
    greeting = "Good Night";
    emoji = "🌙";
    bgColor = "#1E293B";
  }

  const svg = `
  <svg width="900" height="250" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}" rx="25"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
      font-family="Segoe UI, sans-serif"
      font-size="40"
      fill="#ffffff">
      👋 ${greeting}, Ajaya Kumar Sahoo ${emoji}
    </text>
  </svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
