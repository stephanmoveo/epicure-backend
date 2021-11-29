const express = require("express");
const dbconnection = require("./dbConnections/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const auth = require("./MiddleWares/Auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api',require('./routes/Apiroute'))



app.listen(process.env.port || 3000, () => { 
  dbconnection();
  console.log("Web Server is listening at port " + (process.env.port || 3000));     
});
