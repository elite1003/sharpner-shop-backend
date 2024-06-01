import bcrypt from "bcrypt";
import User from "../models/user.mjs";
import { generateToken } from "../utils/jwt.mjs";

export const postSignUp = async (req, res, next) => {
  const email = req.body.userEmail;
  const password = req.body.userPassword;
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Create a new user
    const newUser = new User({
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    res.status(201).json({ email: savedUser.email, _id: savedUser._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const postLogin = async (req, res, next) => {
  const email = req.body.userEmail;
  const password = req.body.userPassword;
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    //Authentication successful
    const jwtToken = generateToken(user);
    res.status(200).json({ message: "Login successful", jwtToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
