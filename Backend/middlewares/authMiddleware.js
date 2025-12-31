const { UsersModel } = require("../model/UsersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UsersModel.findById(data.id);
      if (user) {
        req.user = user;
        return res.json({ status: true, user: user.username, id: user._id });
      } else {
        return res.json({ status: false });
      }
    }
  });
};
module.exports.protect = async (req, res, next) => {
   const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
   
   if (!token) {
     return res.status(401).json({ message: "Not authorized, no token" });
   }

   try {
     const decoded = jwt.verify(token, process.env.TOKEN_KEY);
     req.user = await UsersModel.findById(decoded.id).select("-password");
     next();
   } catch (error) {
     res.status(401).json({ message: "Not authorized, token failed" });
   }
};
