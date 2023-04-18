const express = require("express");
const router = express.Router();

const {
  createClass,
  getAllClasses,
  getClass,
  updateClass,
  deleteClass,
} = require("../controllers/classes");

router.route("/").post(createClass);
router.route("/").get(getAllClasses);
router.route("/:id").get(getClass);
router.route("/:id").put(updateClass);
router.route("/:id").delete(deleteClass);


module.exports = router;