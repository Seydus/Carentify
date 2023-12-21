"use strict";

var dbConn = require("./../../config/dbconfig");

var Payment_Method = function Payment_Method(payment_method) {
  this.Order_ID = payment_method.order_id;
  this.Rental_No = payment_method.rent_id;
  this.Day = payment_method.day;
  this.Month = payment_method.month;
  this.Year = payment_method.year;
  this.Type = payment_method.type;
  this.Reference_No = payment_method.reference_no;
};

Payment_Method.create = function (newPayment_Method, result) {
  dbConn.query(
    "INSERT INTO payment_method set ?",
    newPayment_Method,
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

Payment_Method.findById = function (id, result) {
  dbConn.query(
    "Select * from payment_method where id = ? ",
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

Payment_Method.findAll = function (result) {
  dbConn.query("Select * from payment_method", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("payment_method : ", res);
      result(null, res);
    }
  });
};

Payment_Method.update = function (id, payment_method, result) {
  dbConn.query(
    "UPDATE payment_method SET Order_ID=?,Rental_No=?,Day=?,Month=?,Year=?,Type=?,Reference_No=? WHERE id = ?",
    [
      payment_method.Order_ID,
      payment_method.Rental_No,
      payment_method.Day,
      payment_method.Month,
      payment_method.Year,
      payment_method.Type,
      payment_method.Reference_No,
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

Payment_Method.delete = function (id, result) {
  dbConn.query(
    "DELETE FROM payment_method WHERE id = ?",
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

module.exports = Payment_Method;
