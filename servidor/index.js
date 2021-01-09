const express = require("express")
const MongoClient = require("mongodb").MongoClient
const cors = require("cors")

const app = express();
const config = require("./config.json");

let db;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

MongoClient.connect(config.mongopath, function (err, client) {
  if (err !== null) {
    console.log(err);
  } else {
    db = client.db("colegio");
  }
});

