const Classes = require("../models/classes");
exports.createClass = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({
            status: "fail",
            message: "Please enter a class name",
        });
    }

    const checkClass = await Classes.find({
        name,
    });
    if (checkClass.length > 0)
        return res.status(400).json({
            status: "fail",
            message: "Class already exists",
        });

    const classes = new Classes({
        name,
    });

    await classes.save();
    return res.status(201).json({
        status: "success",
        data: {
            classes,
        },
    });
};

exports.getAllClasses = async (req, res) => {
    try {
        const classes = await Classes.find();
        res.status(200).json({
            status: "success",
            classes,

        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getClass = async (req, res) => {
    try {
        const classes = await Classes.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                classes,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};
exports.updateClass = async (req, res) => {
    try {
        const { id } = req.params;

        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                status: "fail",
                message: "Please enter a class name",
            });
        }

        const updateClass = Classes.findByIdAndUpdate(
            {
                _id: id,
            },
            {
                name,
            },
            {
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json({
            status: "success",
            data: {
                updateClass,
            },
        });
    } catch (err) { }
};

exports.deleteClass = async (req, res) => {
    try {
        const { id } = req.params;
        const classes = await Classes.findByIdAndDelete(id);
        res.status(200).json({
            status: "success",
            data: {
                classes,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};
