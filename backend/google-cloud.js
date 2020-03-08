"use strict";

import express from "express";

const app = express();

app.get("/", (_, res) => {
  res
    .status(200)
    .send("Hello, world!")
    .end();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Hello world by scaper");
  console.log("Press Ctrl+C to quit.");
});

module.exports = app;
