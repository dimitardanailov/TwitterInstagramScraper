"use strict";

import express from "express";
import cors from "cors";
import "./lib/cron";
import db from "./lib/db";
import aggregate from "./lib/aggregate";
import removeSimilarSiblings from "./lib/removeSimilarSiblings";

const app = express();

app.use(cors());

app.get("/", (_, res) => {
  res
    .status(200)
    .send("Hello, world!")
    .end();
});

app.get("/scaper", async (_, res, __) => {
  const twitterFollowers = await db.get("twitterFollowers");
  const instagramFollowers = await db.get("instagramFollowers");

  res.json({
    twitterFollowers,
    instagramFollowers
  });
});

app.get("/aggregate", async (_, res, __) => {
  const { twitterFollowers, instagramFollowers } = db.value();

  res.json({
    twitterFollowers: aggregate(twitterFollowers),
    instagramFollowers: aggregate(instagramFollowers)
  });
});

app.get("/raw", async (_, res, __) => {
  const { twitterFollowers, instagramFollowers } = db.value();

  res.json({
    twitterFollowers: removeSimilarSiblings(twitterFollowers),
    instagramFollowers: removeSimilarSiblings(instagramFollowers)
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Hello world by scaper");
  console.log("Press Ctrl+C to quit.");
});

module.exports = app;
