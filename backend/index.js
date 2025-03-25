require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoutes = require("./src/users/user.route");
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
app.use("/api/auth", authRoutes);

// DB connection
main()
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB_URL);
}
// Api route
app.get("/", (req, res) => {
  res.send(process.env);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
