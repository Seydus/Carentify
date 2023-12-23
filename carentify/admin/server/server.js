var cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const carinventoryRoutes = require("./routes/carinventory.routes");

app.use("/api/carinventory", carinventoryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
