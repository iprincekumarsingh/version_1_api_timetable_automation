const express = require("express");

const router = express.Router();

const { getSlots, createSlot, deleteSlot } = require("../controllers/slot");

router.route("/").get(getSlots)
router.route("/").post(createSlot);
router.route("/:id").delete(deleteSlot);

module.exports = router;

