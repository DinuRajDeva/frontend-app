const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const data = await fetch("http://backend-service/orders").then(r => r.json());
  res.send(`<h1>Frontend</h1><pre>${JSON.stringify(data)}</pre>`);
});

app.listen(3000, () => console.log("frontend running"));
