const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    paid: Boolean,
    choices: [
      {
        type: Schema.Types.ObjectId,
        ref: "Choice"
      }
    ]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
