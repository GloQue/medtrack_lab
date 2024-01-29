const asyncHandler = require("express-async-handler");
const Lab = require("../models/labModel");
const mongoose = require("mongoose");

const getLabs = asyncHandler(async (req, res) => {
  const allLabs = await Lab.find();
  res.status(200).json(allLabs);
});

const getLab = asyncHandler(async (req, res) => {
  const id = req.params.id;

  var isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    return res.status(400).json({ message: "invalid id" });
  }

  const lab = await Lab.findById(id);
  return res.status(200).json(lab);
});

const addLab = asyncHandler(async (req, res) => {
  const { labName, labType, mainCategory, subCategory, labCode, labPrice } =
    req.body;
  if (
    !labName ||
    !labType ||
    !mainCategory ||
    !subCategory ||
    !labCode ||
    !labPrice
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  const labExist = await Lab.findOne({ labName });
  if (labExist) {
    return res.status(409).json({ mgs: "Lab already exist" });
  }

  const addLab = await Lab.create({
    labName,
    labType,
    mainCategory,
    subCategory,
    labCode,
    labPrice,
  });
  return res.status(201).json(addLab);
});

const updateLab = asyncHandler(async (req, res) => {
  const { id } = req.params;
  var isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) {
    return res.status(400).json({ message: "invalid id" });
  }
  const updateLab = await Lab.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).json(updateLab);
});

const deleteLab = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Lab.findByIdAndDelete(id);
  return res.status(200).json({ message: `Delete drug for ${req.params.id}` });
});

module.exports = { getLabs, getLab, addLab, updateLab, deleteLab };
