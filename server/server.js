// most, if not all the comments are the comments Tim wrote down in his recording
// i have copied these as they have been really helpful for when I'm looking back on code and not understanding what it means or what it does, which has happened a lot this assignment

import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // this allows our client to communicate with the server wiithout being blocked

// connect to a database.db file (normally this would be "connect to the databse that is hosted elsewhere")
import Database from "better-sqlite3";
const db = new Database("database.db"); // go and get the existing db file

app.get("/", function (request, response) {
  response.json("You are looking at my root route.");
});

app.get("/guestbook", function (request, response) {
  // here we use .all instead of .run because we aren't INSERTing, but selecting. So we want ALL the results back
  const guestbook = db.prepare("SELECT * FROM guestbook").all();
  response.json(guestbook);
});

app.post("/message", function (request, response) {
  const newMessage = request.body;
  // this console log will appear in the terminal because that is where the server is running
  console.log(newMessage);

  // here is the response. At the moment we are just sending back what the client sent with their own request
  // soon we will do stuff with that information, like adding it to a database
  response.json(newMessage);
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});
