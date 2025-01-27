// api.js
const express = require("express");
const app = express();
const MongoClient = require("./database");

app.get("/api/data", async (req, res) => {
  const db = await MongoClient.connect();
  const collection = db.collection("products");
  const data = await collection.find().toArray();
  res.json(data);
});

module.exports = app;
