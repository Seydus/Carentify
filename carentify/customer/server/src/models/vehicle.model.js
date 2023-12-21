"use strict";

var dbConn = require("./../../config/dbconfig");

var Vehicle = function Vehicle(vehicle) {
  this.Car_ID = vehicle.card_id;
  this.Plat_No = vehicle.plat_no;
  this.License_No = vehicle.license_no;
  this.Seat_Capacity = vehicle.seat_capacity;
  this.vehicleMake = vehicle.vehicleMake;
  this.vehicleType = vehicle.vehicleType;
  this.transmission = vehicle.transmission;
  this.price = vehicle.price;
};

Vehicle.create = function (newVehicle, result) {
  dbConn.query("INSERT INTO vehicle set ?", newVehicle, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Vehicle.findById = function (id, result) {
  dbConn.query("Select * from vehicle where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Vehicle.findAll = function (result) {
  dbConn.query("Select * from vehicle", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("vehicle : ", res);
      result(null, res);
    }
  });
};

Vehicle.update = function (id, vehicle, result) {
  dbConn.query(
    "UPDATE vehicle SET Car_ID=?,Plat_No=?,License_No=?,Seat_Capacity=?,vehicleMake=?,vehicleType=?,transmission=?,price=? WHERE id = ?",
    [
      vehicle.Car_ID,
      vehicle.Plat_No,
      vehicle.License_No,
      vehicle.Seat_Capacity,
      vehicle.vehicleMake,
      vehicle.vehicleType,
      vehicle.transmission,
      vehicle.price,
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

Vehicle.delete = function (id, result) {
  dbConn.query("DELETE FROM vehicle WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Vehicle;
