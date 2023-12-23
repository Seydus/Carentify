const express = require("express");
const router = express.Router();
const carinventoryController = require("../controllers/carinventory.controller");
// Retrieve all carinventory
router.get("/", carinventoryController.findAll);
// Create a new carinventory
router.post("/", carinventoryController.create);
// Retrieve a single carinventory with id
router.get("/:id", carinventoryController.findById);
// Update a carinventory with id
router.put("/:id", carinventoryController.update);
// Delete a carinventory with id
router.delete("/:id", carinventoryController.delete);

module.exports = router;
