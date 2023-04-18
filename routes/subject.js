const express = require("express");
const auth = require("../middlewares/auth");
const router = express.Router();

const {
  createSubject,
  getSubjects,
  getSubject,
  updateSubject,
  deleteSubject,
  classSubjects,
} = require("../controllers/subject");

router.route("/").post(auth, createSubject);
router.route("/").get(auth, getSubjects);
router.route("/:id").get(auth, getSubject);
router.route("/:id").put(auth, updateSubject);
router.route("/:id").delete(auth, deleteSubject);
router.route("/searchSubject/:class").get(auth, classSubjects);

module.exports = router;
