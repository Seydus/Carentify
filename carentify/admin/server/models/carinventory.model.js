"use strict";
var dbConn = require("../config/db.config");

//CarInventory object create
var CarInventory = function (carinventory) {
  this.image = carinventory.image;
  this.make = carinventory.make;
  this.model = carinventory.model;
  this.type = carinventory.type;
  this.price = carinventory.price;
  this.vin = carinventory.vin;
  this.status = carinventory.status;
  this.description = carinventory.description;
};

CarInventory.create = function (newCarInventory, result) {
  dbConn.query(
    "INSERT INTO carinventory set ?",
    newCarInventory,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    }
  );
};
CarInventory.findById = function (id, result) {
  dbConn.query(
    "Select * from carinventory where car_id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
CarInventory.findAll = function (result) {
  dbConn.query("Select * from carinventory", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("carinventory : ", res);
      result(null, res);
    }
  });
};
CarInventory.update = function (id, carinventory, result) {
  dbConn.query(
    "UPDATE carinventory SET car_image=?,car_make=?,car_model=?,car_type=?,car_price=?,car_vin=?,car_status=?,car_description=? WHERE car_id = ?",
    [
      carinventory.car_image,
      carinventory.car_make,
      carinventory.car_model,
      carinventory.car_type,
      carinventory.car_price,
      carinventory.car_vin,
      carinventory.car_status,
      carinventory.car_description,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
CarInventory.delete = function (id, result) {
  dbConn.query(
    "DELETE FROM carinventory WHERE car_id = ?",
    [id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = CarInventory;
