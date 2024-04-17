const express = require("express");
const { connect } = require("./configs/db.config");
const app = express();
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT;
const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
const boardRoutes = require("./routes/board");
app.use("/board", boardRoutes);
app.listen(PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`Server is running on port ${PORT}`);
  connect();
});
