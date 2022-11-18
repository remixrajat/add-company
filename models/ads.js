const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema({
  _id: {
    type: Number,
  },
  companyId: {
    type: Schema.Types.Number,
    ref: "Company",
    required: true,
  },
  primaryText: {
    type: String,
  },
  headline: {
    type: String,
  },
  description: {
    type: String,
  },
  CTA: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

module.exports = mongoose.model("Ad", adSchema);
