const express = require("express");

const router = express.Router();

const {
  createTeacher,
  getAllTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher,
  getTeacherByClass,
} = require("../controllers/teachers");

router.route("/").post(createTeacher);
router.route("/").get(getAllTeachers);
router.route("/:id").get(getTeacher);
router.route("/:id").put(updateTeacher);
router.route("/:id").delete(deleteTeacher);


router.route('/getsubject/:id').get(getTeacherByClass);

module.exports = router;
