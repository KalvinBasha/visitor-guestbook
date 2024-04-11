import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import Database from "better-sqlite3";
const db = new Database("databse.db");

app.get("/", function (request, response) {
  response.json("You are looking at my root route.");
});

app.get("/teams", function (request, response) {
  const teams = db.prepare("SELECT * FROM teams").all();
  response.json(teams);
});

app.listen(8080, function () {
  console.log("Yes. 8080");
});
