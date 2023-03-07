import User from "../models/User.js";
import { createError } from "../utils/error.js";
import bcrypt from "bcryptjs";

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = await bcrypt.hash("req.body.password", salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: passwordHash,
    });
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not Found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
     user.password
    );
    res.status(200).json(user);
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username"));
    
  } catch (err) {
    next(err);
  }
};
