const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
const port = 5000;
mongoose.set("strictQuery", false);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Error", err));

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Node Js Serer started at port ${port}!`));
