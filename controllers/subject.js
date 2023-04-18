const Subject = require("../models/subject");

exports.createSubject = async (req, res) => {
  try {
    const { subject, classes } = req.body;
    if (!subject || !classes) {
      return res.status(400).send({
        status: "fail",
        message: "Please fill all the fields",
      });
    }
    const create_subject = await Subject.create({
      subject,
      classes,
    });
    return res.status(200).send({
      status: "success",
      message: "Subject created successfully",
      create_subject,
    });
  } catch (err) {
    console.log(err);
  }
};
// gett all subjects
exports.getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    return res.status(200).send({
      status: "success",
      message: "Subjects fetched successfully",
      subjects,
    });
  } catch (err) {
    console.log(err);
  }
};
// get a single subject
exports.getSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    return res.status(200).send({
      status: "success",
      message: "Subject fetched successfully",
      subject,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateSubject = async (req, res) => {
  try {
    const { subject, classes } = req.body;

    if (!subject || !classes) {
      return res.status(400).send({
        status: "fail",
        message: "Please fill all the fields",
      });
    }
    const update_subject = await Subject.findByIdAndUpdate(req.params.id, {
      subject,
      classes,
    });
    return res.status(200).send({
      status: "success",
      message: "Subject updated successfully",
      update_subject,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.deleteSubject = async (req, res) => {
  try {
    const check = await Subject.findById(req.params.id);

    if (!check) {
      return res.status(400).send({
        status: "fail",
        message: "Subject not found",
      });
    }
    const delete_subject = await Subject.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      status: "success",
      message: "Subject deleted successfully",
      delete_subject,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.classSubjects = async (req, res) => {
  // get all subects where class is equal to the class in the url

  try {
    const subjects = await Subject.find({ classes: req.params.class });
    return res.status(200).send({
      status: "success",
      message: "Subjects fetched successfully",
      subjects,
    });
  } catch (err) {
    console.log(err);
  }
};
