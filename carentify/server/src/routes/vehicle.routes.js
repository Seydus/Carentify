const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicle.controller");

router.get("/", vehicleController.findAll);
router.post("/", vehicleController.create);
router.get("/:id", vehicleController.findById);
router.put("/:id", vehicleController.update);
router.delete("/:id", vehicleController.delete);

module.exports = router;
