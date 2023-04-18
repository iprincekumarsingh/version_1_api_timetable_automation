const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SlotsSchema = new Schema({
  timeslot: {
    type: String,
    required: true,
  },
});
module.exports = Slots = mongoose.model("time_slots", SlotsSchema);
