const User = require("../models/userModel");

//login
const userLogin = (req, res) => {
  res.json({ mssg: "login successful" });
};

//signup
const userSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {

    const user = await User.signup(name, email, password);
    res.status(200).json({ mssg: "Signup Successful", user});

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  userLogin,
  userSignUp,
};
