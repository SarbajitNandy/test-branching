const { dbConnection } = require("./db");

const app = () => {
  dbConnection();
  console.log("App1 setup is done");
  return 8000;
};

module.exports = { app };
