const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a section name"],
  },
});

const Section = mongoose.model("Section", sectionSchema);

module.exports = Section;
