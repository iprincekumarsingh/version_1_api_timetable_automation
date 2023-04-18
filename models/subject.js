const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubjectSchema = new Schema({
  subject: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
});

const Subject = mongoose.model("Subject", SubjectSchema);

module.exports = Subject;