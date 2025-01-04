const User = require("../models/userModel");
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

//login
const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)

        // create token
        const token = createToken(user._id)
        res.status(200).json({ mssg: "login successful", token });
    }catch(error) {
        res.status(400).json({ mssg: error.message });
    }
};

//signup
const userSignUp = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.signup(name, email, password);

    //create token
    const token = createToken(user._id)

    res.status(200).json({ mssg: "Signup Successful", token});
  } catch (error) {
    res.status(400).json({ mssg: error.message });
  }
};

module.exports = {
  userLogin,
  userSignUp,
};
