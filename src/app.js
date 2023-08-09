const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");
const config = require("config");
const app = express();
const route = require("./routes/index");
const { urlencoded } = require("body-parser");
app.use(cors());
app.use(express.json());
app.use(route);
app.use(urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "src/views");

const port = config.get("port");

const bootstrapt = async () => {
  await connect("mongodb://127.0.0.1:27017/locations");
  app.listen(port, () => {
    console.log(port);
  });
};


bootstrapt()