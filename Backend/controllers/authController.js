const { UsersModel } = require("../model/UsersModel");
const FundsModel = require("../model/FundsModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, firstname, lastname } = req.body;
    const existingUser = await UsersModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UsersModel.create({
      email,
      password: await bcrypt.hash(password, 10),
      username,
      firstname,
      lastname,
      createdAt: new Date(),
    });
    
     await FundsModel.create({
      userId: user._id,
      balance: 0,
    });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({message:'All fields are required'})
    }
    const user = await UsersModel.findOne({ username });
    if(!user){
      return res.json({message:'Incorrect password or username'}) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or username'}) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(200).json({ message: "User logged in successfully", success: true, user: { _id: user._id, username: user.username, email: user.email }});
  } catch (error) {
    console.error(error);
  }
}

module.exports.Logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
