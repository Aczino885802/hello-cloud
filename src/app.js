import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (_req, res) => {
  res.json({
    message: "Hello Cloud ☁",
    docs: ["/health", "/version"]
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/version", (_req, res) => {
  res.json({ version: "1.0.0" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
