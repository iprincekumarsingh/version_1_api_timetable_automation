const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, "Please enter a subject"],
    unique: false,
  },
  classes: {
    type: String,
    required: [true, "Please enter a class"],
  },
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  // },
  user: {
    type: String,
    required: [true, "Please enter a name"],
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
