const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config({ path: ".env" });
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/api/shopowners", require("./routes/shopowners"));
app.use("/api", require("./routes/locations"));
app.use('/customers', require('./routes/customers'));
app.listen(PORT, () => {
  console.log("Server is running on port and this is amazing ::  " + PORT);
});
