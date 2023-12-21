"use strict";

const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "carrentify_db",
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected Successfully!");
});

module.exports = dbConn;
