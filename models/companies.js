const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const companySchema = new Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model("Company", companySchema);
