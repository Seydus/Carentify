require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

const cors = require("cors");
const vehicleRoutes = require("./src/routes/vehicle.routes");
const customerRoutes = require("./src/routes/customer.routes");
const payment_methodRoutes = require("./src/routes/payment_method.routes");
app.use(cors());

app.use("/api/customer", customerRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/payment_method", payment_methodRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
