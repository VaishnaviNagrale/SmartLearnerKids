import userModel from "../models/user.model.js";

// login callback
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Use the findOne method on userModel to find a user by email and password
    const user = await userModel.findOne({ email, password });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


//Register Callback
export const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};