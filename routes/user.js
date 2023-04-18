const express = require("express");

const router = express.Router();

const {
  createAccount,
  login,
  profile,
  updateProfile,
  updatePassword,
  getTeachers
} = require("../controllers/userController");

const auth = require("../middlewares/auth");
const rolecheck = require("../middlewares/rolechecker");

router.route("/register").post(auth, rolecheck, createAccount);
router.route("/login").post(login);
router.route("/profile").get(auth, profile);

router.route("/profile/update").put(auth, updateProfile);

router.route("/profile/password/update").put(auth, updatePassword);

router.route('/getTeachers').get(auth, rolecheck, getTeachers)

module.exports = router;
