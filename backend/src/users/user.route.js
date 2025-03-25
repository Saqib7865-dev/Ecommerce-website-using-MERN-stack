const express = require("express");
const router = express.Router();
const UserModel = require("./user.model");
// Register endpoint
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new UserModel({ username, email, password });
    await user.save();
    res.status(200).send({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).send({ message: error.message });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid password" });
    }
    res.status(200).send({ message: "User logged in successfully", user });
  } catch (error) {
    console.error("Error logging in user", error);
    res.status(500).send({ message: error.message });
  }
});
module.exports = router;
