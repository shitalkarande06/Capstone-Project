// model for user

const mongoose = require("mongoose");

// schema for signup
const userSchema = mongoose.Schema(
  {
    name: { type: String, require },
    email: { type: String, require },
    mobileNo:{type : Number, require}, 
    password: { type: String, require },
    isAdmin: { type: Boolean, require, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);




// schema for authentication
const userloginSchema = mongoose.Schema(
  {
    email: { type: String, require },
    password: { type: String, require },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userloginSchema);
