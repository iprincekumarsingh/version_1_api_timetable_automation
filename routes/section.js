const express = require("express");
const { route } = require("./classes");

const router = express.Router();

const {
  createSection,
  getAllSections,
  getSection,
  updateSection,
  deleteSection,
} = require("../controllers/section");

router.route("/").get(getAllSections);
router.route("/").post(createSection);
router.route("/:id").get(getSection);
router.route("/:id").put(updateSection);
router.route("/:id").delete(deleteSection);

module.exports = router;
