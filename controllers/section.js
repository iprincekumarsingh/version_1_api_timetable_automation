const Section = require("../models/section");
exports.createSection = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        status: "fail",
        message: "Please enter a section name",
      });
    }
    const checkSection = await Section.find({
      name,
    });
    if (checkSection.length > 0)
      return res.status(400).json({
        status: "fail",
        message: "Section already exists",
      });

    const section = new Section({
      name: name.toUpperCase(),
    });
    await section.save();
    res.status(201).json({
      status: "success",
      data: {
        section,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json({
      status: "success",
      sections,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSection = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        section,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
exports.updateSection = async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        section,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    await Section.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
