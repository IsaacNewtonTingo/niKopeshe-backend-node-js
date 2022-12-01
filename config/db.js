const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then((response) => {
    if (response) {
      console.log("DB connected");
    } else {
      console.log("Something went wrong while connecting to db");
    }
  })
  .catch((err) => {
    console.log(err);
  });
