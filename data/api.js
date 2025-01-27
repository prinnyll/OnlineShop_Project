const express = require("express");
const app = express();
const MongoClient = require("./database");
const ejs = require("ejs");
const fs = require("fs");

app.get("/api/data", async (req, res) => {
  const db = await MongoClient.connect();
  const collection = db.collection("products");
  const data = await collection.find().toArray();
  res.json(data);
});

// Render index.ejs as a static HTML file
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./");

app.get("/", (req, res) => {
  res.render("index", (err, html) => {
    if (err) {
      console.error(err);
    } else {
      fs.writeFileSync("index.html", html);
      res.send(html);
    }
  });
});

module.exports = app;
