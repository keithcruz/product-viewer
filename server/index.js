"use strict";

const express = require("express");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

// set up the static files
// app.use(express.static("assets"));

app.get("/api", (req, res) => {
  res.send("Hello world\n");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
