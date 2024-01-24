const asyncHandler = require("express-async-handler");
const Drug = require("../models/drugModel");

const getDrugs = asyncHandler(async (req, res) => {
  const allDrugs = await Drug.find();
  return res.status(200).json(allDrugs);
});

const getDrug = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const drug = await Drug.findById(id);
  if (!drug) {
    return res.status(404).json({ message: "Drug not found" });
  }
  return res.status(200).json(drug);
});

const createDrug = asyncHandler(async (req, res) => {
  const { drugName, description, unitPrice, drugCode, drugPrice } = req.body;
  if (!drugName || !description || !unitPrice || !drugCode || !drugPrice) {
    return res.status(400).json({ msg: "All fields are required" });
  }
  const drugExist = await Drug.findOne({ drugName });
  if (drugExist) {
    return res.status(409).json({ mgs: "Drug already exist" });
  }

  const addDrug = await Drug.create({
    drugName,
    description,
    unitPrice,
    drugCode,
    drugPrice,
  });
  return res.status(201).json(addDrug);
});

const updateDrug = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const drug = await Drug.findOne({ id });
  if (!drug) {
    return res.status(404).json({ message: "Drug not found" });
  }

  const updateDrug = await Drug.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(200).json(updateDrug);
});

const deleteDrug = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Drug.findByIdAndDelete(id);
  return res.status(200).json({ message: `Delete drug for ${req.params.id}` });
});

module.exports = {
  getDrugs,
  getDrug,
  createDrug,
  updateDrug,
  deleteDrug,
};
