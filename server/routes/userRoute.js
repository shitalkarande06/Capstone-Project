// route for regiester page

const express = require("express");

const router = express.Router();
const user = require("../models/userModel");
const User = require("../models/userModel");

router.post("/register", async (req, res) => {
  const { name, email, password, mobileNo } = req.body;

  const newUser = new user({ name, email, password, mobileNo });

  try {
    newUser.save();
    res.send("User Registered succesfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
 
  try {
    const user = await User.find({  email, password });

    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        mobileNo: user[0].mobileNo,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "user Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
});

module.exports = router;
