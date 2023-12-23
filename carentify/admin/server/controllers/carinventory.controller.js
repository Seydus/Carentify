"use strict";
const CarInventory = require("../models/carinventory.model");
exports.findAll = function (req, res) {
  CarInventory.findAll(function (err, carinventory) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", carinventory);
    res.send(carinventory);
  });
};
exports.create = function (req, res) {
  const new_carinventory = new CarInventory(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    CarInventory.create(new_carinventory, function (err, carinventory) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "CarInventory added successfully!",
        data: carinventory,
      });
    });
  }
};
exports.findById = function (req, res) {
  CarInventory.findById(req.params.id, function (err, carinventory) {
    if (err) res.send(err);
    res.json(carinventory);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    CarInventory.update(
      req.params.id,
      new CarInventory(req.body),
      function (err, carinventory) {
        if (err) res.send(err);
        res.json({
          error: false,
          message: "CarInventory successfully updated",
        });
      }
    );
  }
};
exports.delete = function (req, res) {
  CarInventory.delete(req.params.id, function (err, carinventory) {
    if (err) res.send(err);
    res.json({ error: false, message: "CarInventory successfully deleted" });
  });
};
