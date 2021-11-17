const express = require("express");
const dbconnection = require("./dbConnections/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const auth = require("./MiddleWares/Auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin", auth.protect, require("./routes/AdminRoute"));
app.use("/user", require("./routes/UserRoute"));
app.use("/docs", express.static("./apidoc"));


app.listen(process.env.PORT || 3000, () => {
  dbconnection();
  console.log("Web Server is listening at port " + (process.env.PORT || 3000));
});
