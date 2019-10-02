const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choiceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    round: Number,
    team: String,
    result: String
  },
  {
    timestamps: true
  }
);

const Choice = mongoose.model("Choice", choiceSchema);
module.exports = Choice;
