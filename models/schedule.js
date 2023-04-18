const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "teacher",
  },
  monday: {
    type: Number,
    required: true,
  },
  tuesday: {
    type: Number,
    required: true,
  },
  wednesday: {
    type: Number,
    required: true,
  },
  thursday: {
    type: Number,
    required: true,
  },
  friday: {
    type: Number,
    required: true,
  },
  saturday: {
    type: Number,
    required: true,
  },
  slots: [
    {
      teacher: {
        type: String,
        required: true,
      },
      sections: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
      numLectures: {
        type: String,
        required: true,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
