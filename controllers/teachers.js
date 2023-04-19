const { response } = require("../app");
const Teacher = require("../models/teachers");
const mongoose = require("mongoose");

exports.createTeacher = async (req, res) => {
  // try {
  const { subject, classes, user } = req.body;

  if (!subject || !classes || !user)
    return res.status(400).json({
      status: "fail",
      message: "Please enter all fields",
    });

  const checkTeacher = await Teacher.find({ subject, classes, user });

  if (checkTeacher.length > 0) {
    return res.status(400).json({
      status: "fail",
      message: "Teacher or subject already exists",
    });
  }

  if (checkTeacher.length > 0) {
    return res.status(400).json({
      status: "fail",
      message: "Teacher or subject already exists",
    });
  }

  const teacher = new Teacher({
    subject,
    classes,
    user,
  });

  await teacher.save();
  return res.status(201).json({
    status: "success",
    data: {
      teacher,
    },
  });
};

exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({
      status: "success",
      results: teachers.length,
      data: {
        teachers,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        teacher,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const { subject, classes } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({
        status: "fail",
        message: "No teacher with that id",
      });

    const updatedTeacher = { subject, classes, _id: id };

    await Teacher.findByIdAndUpdate(id, updatedTeacher, { new: true });

    return res.status(200).json({
      status: "success",
      data: {
        teacher: updatedTeacher,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteTeacher = async (req, res) => {
  // try {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No teacher with that id");

  await Teacher.findByIdAndRemove(id);

  return res.status(200).json({
    status: "success",
    data: null,
  });
  // } catch (err) {
  //   res.status(404).json({
  //     status: "fail",
  //     message: err,
  //   });
  // }
};

exports.getTeacherByClass = async (req, res) => {

  const user = await Teacher.find({
    classes: req.params.id
  }).populate("user");

  res.status(200).json({
    status: "success",
    user
  });

}
