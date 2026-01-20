const User = require("../models/users");
const bcrypt = require("bcrypt");
require("dotenv").config();

//Registring Shop owner / staff
exports.signUp = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(403).json({
        success: false,
        message: "All fields are required ",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        success: false,
        message: "User already registered. Please login ",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashPassword,
      role,
    });

    return res.status(202).json({
      success: true,
      user,
      message: "Registered successfullly . ",
    });
  } catch (error) {
    console.log("error occured while user registration", error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered, please try again",
    });
  }
};

//Login
exports.login = async (req, res) => {

    try{ 
        

    }catch(error){

    }

};
