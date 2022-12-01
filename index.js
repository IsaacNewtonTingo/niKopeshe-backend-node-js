const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser").json;

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser());

app.listen(PORT, (live, err) => {
  console.log(`App listening on port ${PORT}`);
});

require("./config/db");

const userRoute = require("./routes/user");
const verifyToken = require("./middleware/auth");

app.use("/api/user", userRoute);

app.post("/welcome", verifyToken, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});
