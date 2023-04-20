const app = require("./app");

// importing dotenv
require("dotenv").config();
// db connection import
const dbConn = require("./config/dbConn");

// db connection
dbConn();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port  http://127.0.0.1:${process.env.PORT}`);
});
