const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
var morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("tiny"));


// importing routes from routes folder
const user = require("./routes/user");
const slots = require("./routes/slots");
const subject = require("./routes/subject");
const teachers = require("./routes/teachers");
const classes = require("./routes/classes");
const section = require("./routes/section");
const generate = require("./routes/generate");


app.use("/api/v1/auth", user);
app.use("/api/v1/slots", slots);
app.use("/api/v1/subject", subject);
app.use("/api/v1/teacher", teachers);
app.use("/api/v1/class", classes);
app.use("/api/v1/section", section);
app.use("/api/v1/generate", generate);


module.exports = app;
