const express = require("express");
const {
  getLabs,
  getLab,
  addLab,
  updateLab,
  deleteLab,
  getPaginatedUsers,
} = require("../controllers/labController");
const router = express.Router();

router.get("/", getLabs);

router.get("/paginatedUsers", getPaginatedUsers)

router.get("/:id", getLab);

router.post("/", addLab);

router.put("/:id", updateLab);

router.delete("/:id", deleteLab);


module.exports = router;
