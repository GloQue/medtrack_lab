const mongoose = require("mongoose");

const drugSchema = mongoose.Schema({
  drugName: {
    type: String,
    required: [true, "Drug name empty."],
  },
  description: {
    type: String,
    required: [true, "Drug description empty."],
  },
  unitPrice: {
    type: String,
    required: [true, "Drug unit pricing empty."],
  },
  drugCode: {
    type: String,
    required: [true, "Drug code empty."],
    set: (value) => value.toUpperCase(),
  },
  drugPrice: {
    type: Number,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model("Drug", drugSchema);
