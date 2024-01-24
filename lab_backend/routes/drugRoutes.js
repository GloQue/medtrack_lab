const express = require("express");

const router = express.Router();

const {
  getDrugs,
  createDrug,
  getDrug,
  updateDrug,
  deleteDrug,
} = require("../controllers/drugController");

router.get("/", getDrugs);

router.get("/:id", getDrug);

router.post("/", createDrug);

router.put("/:id", updateDrug);

router.delete("/:id", deleteDrug);

module.exports = router;
