const express = require("express");
const router = express.Router();
const payment_methodController = require("../controllers/payment_method.controller");

router.get("/", payment_methodController.findAll);
router.post("/", payment_methodController.create);
router.get("/:id", payment_methodController.findById);
router.put("/:id", payment_methodController.update);
router.delete("/:id", payment_methodController.delete);

module.exports = router;
