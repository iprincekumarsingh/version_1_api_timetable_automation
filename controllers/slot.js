const time_slots = require("../models/slots");
exports.createSlot = (req, res) => {
  const { time } = req.body;

  if(!time){
    return res.status(401).json({
      message: "Slot is required",
    })
  }
  const slot = new time_slots({
    timeslot: time,
  });

  slot.save().then((data) => {
    res.status(201).json({
      message: "Slot created successfully",
      data,
    });
  });
};

exports.getSlots = (req, res) => {
  time_slots
    .find()
    .then((slots) => {
      if (slots.length === 0) {
        return res.status(400).json({
          message: "No slots found",
        });
      }
      return res.status(200).send({
        status: "success",
        message: "All the slots",
        slots,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteSlot = (req, res) => {
  time_slots.findByIdAndDelete(req.params.id).then((slot) => {
    if (!slot) {
      return res.status(404).json({
        message: "Slot not found",
      });
    }
    res.status(200).json({
      message: "Slot deleted successfully",
    });
  });
};
