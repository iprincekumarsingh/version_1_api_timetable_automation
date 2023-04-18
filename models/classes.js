const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a class name"],
  },
});

const Classes = mongoose.model("Class", classSchema);

module.exports = Classes;
