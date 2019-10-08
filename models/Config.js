const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const configSchema = new Schema(
  {
    setRound: Number
  },
  {
    timestamps: true
  }
);

const Config = mongoose.model("Choice", configSchema);
module.exports = Config;
