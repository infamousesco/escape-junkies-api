const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcrypt");

const Joi = require("joi");

router.post("/register", async (req, res) => {
  //User validation
  const userValidation = await registerValidation(req);

  //Check if user name exists
  const userNameExist = await User.findOne({ userName: req.body.userName });
  if (userNameExist)
    return res.status(400).json({ message: "User Name already exists" });

  //Check for duplicate emails
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).json({ message: "User already exists" });

  //Hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    userName: req.body.userName,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    if (!userValidation.error) {
      const savedUser = await user.save();
      res.status(200).json({ message: "User created successfully." });
    } else {
      res.status(400).send(userValidation.error.details[0].message);
    }
  } catch (err) {
    res.status(400).json({ message: "There was an error creating user." });
  }
});

router.post("/login", async (req, res) => {
  const loginValid = await loginValidation(req);
  //Check for duplicate emails
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(400).json({ message: "User already exists" });
});

module.exports = router;
