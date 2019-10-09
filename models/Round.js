const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const roundSchema = new Schema(
  {
    round: Number
  },
  {
    timestamps: true
  }
);
const Round = mongoose.model("Round", roundSchema);
module.exports = Round;
