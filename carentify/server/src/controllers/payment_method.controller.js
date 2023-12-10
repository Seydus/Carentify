"use strict";

const Customer = require("../models/payment_method.model");

exports.findAll = function (req, res) {
  Customer.findAll(function (err, customers) {
    console.log("controller");

    if (err) {
      res.status(500).send({
        status: 500,
        error: true,
        message: err.message,
      });
    } else {
      console.log("res", customers);
      res.status(200).send({
        status: 200,
        data: customers,
      });
    }
  });
};

exports.create = function (req, res) {
  const new_customer = new Customer(req.body);
  //handles null error
  if (Object.keys(req.body).length === 0) {
    res.status(400).send({
      status: 400,
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Customer.create(new_customer, function (err, customer) {
      if (err) {
        res.status(500).send({
          status: 500,
          error: true,
          message: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          error: false,
          message: "Customer added successfully!",
          data: customer,
        });
      }
    });
  }
};

exports.findById = function (req, res) {
  Customer.findById(req.params.id, function (err, customer) {
    if (err) {
      res.status(500).send({
        status: 500,
        error: true,
        message: err.message,
      });
    } else {
      res.status(200).json(customer);
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
    Customer.update(
      req.params.id,
      new Customer(req.body),
      function (err, customer) {
        if (err) {
          res.status(500).send({
            status: 500,
            error: true,
            message: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Customer updated successfully!",
            data: customer,
          });
        }
      }
    );
  }
};

exports.delete = function (req, res) {
  Customer.delete(req.params.id, function (err, customer) {
    if (err) {
      res.status(500).send({
        status: 500,
        error: true,
        message: err.message,
      });
    } else {
      res.status(200).json({
        status: 200,
        error: false,
        message: "Customer deleted successfully!",
      });
    }
  });
};
