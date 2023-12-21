"use strict";

const Vehicle = require("../models/vehicle.model");

exports.findAll = function (req, res) {
  Vehicle.findAll(function (err, vehicles) {
    console.log("controller");
    if (err) {
      res.status(500).send({ status: 500, error: true, message: err.message });
    } else {
      console.log("res", vehicles);
      res.status(200).send({ status: 200, data: vehicles });
    }
  });
};

exports.create = function (req, res) {
  const new_vehicle = new Vehicle(req.body);
  //handles null error
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      status: 400,
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Vehicle.create(new_vehicle, function (err, vehicle) {
      if (err) {
        res
          .status(500)
          .send({ status: 500, error: true, message: err.message });
      } else {
        res.status(200).json({
          status: 200,
          error: false,
          message: "Vehicle added successfully!",
          data: vehicle,
        });
      }
    });
  }
};

exports.findById = function (req, res) {
  Vehicle.findById(req.params.id, function (err, vehicle) {
    if (err) {
      res.status(500).send({ status: 500, error: true, message: err.message });
    } else {
      res.status(200).json(vehicle);
    }
  });
};

exports.update = function (req, res) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      status: 400,
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Vehicle.update(
      req.params.id,
      new Vehicle(req.body),
      function (err, vehicle) {
        if (err) {
          res
            .status(500)
            .send({ status: 500, error: true, message: err.message });
        } else {
          res
            .status(200)
            .json({ error: false, message: "Vehicle successfully updated" });
        }
      }
    );
  }
};

exports.delete = function (req, res) {
  Vehicle.delete(req.params.id, function (err, vehicle) {
    if (err) {
      res.status(500).send({ status: 500, error: true, message: err.message });
    } else {
      res
        .status(200)
        .json({ error: false, message: "Vehicle successfully deleted" });
    }
  });
};
