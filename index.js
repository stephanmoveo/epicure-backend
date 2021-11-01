const express = require("express");
const dbconnection = require("./dbConnections/dbConnection");
const app = express();
app.use(express.json());

app.use("/dish", require("./routes/DishRoute"));
app.use("/restaurants", require("./routes/RestaurantRoute"));
app.use("/chef", require("./routes/ChefRoute"));

app.listen(process.env.port || 3000, () => {
  dbconnection();
  console.log("Web Server is listening at port " + (process.env.port || 3000)); 
});
