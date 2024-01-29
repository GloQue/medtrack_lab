const mongoose = require("mongoose");

const labSchema = mongoose.Schema({
  labName: {
    type: String,
    required: [true, "Lab name empty."],
  },
  labType: {
    type: String,
    required: [true, "Lab type empty."],
  },
  mainCategory: {
    type: String,
    required: [true, "Lab's Main Category empty."],
  },
  subCategory: {
    type: String,
    required: [true, "Lab's Sub Category empty."],
  },
  labCode: {
    type: String,
    required: [true, "Lab code empty."],
  },
  labPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Lab", labSchema);
