"use strict";

var dbConn = require("./../../config/dbconfig");

var Customer = function Customer(customer) {
  this.Rental_No = customer.rent_id;
  this.First_Name = customer.first_name;
  this.Last_Name = customer.last_name;
  this.Contact_no = customer.contact_no;
  this.Payment_Method = customer.payment_method;
  this.email = customer.email;
};

Customer.create = function (newCustomer, result) {
  dbConn.query("INSERT INTO customer set ?", newCustomer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Customer.findById = function (id, result) {
  dbConn.query("Select * from customer where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Customer.findAll = function (result) {
  dbConn.query("Select * from customer", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("customer : ", res);
      result(null, res);
    }
  });
};

Customer.update = function (id, customer, result) {
  dbConn.query(
    "UPDATE customer SET Rental_No=?,First_Name=?,Last_Name=?,Contact_no=?,Payment_Method=?,email=? WHERE id = ?",
    [
      customer.Rental_No,
      customer.First_Name,
      customer.Last_Name,
      customer.Contact_no,
      customer.Payment_Method,
      customer.email,
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

Customer.delete = function (id, result) {
  dbConn.query("DELETE FROM customer WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Customer;
