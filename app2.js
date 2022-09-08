const { dbConnection } = require("./db");

const app2 = async () => {
  const appPromise = new Promise((re, rj) => {
    setTimeout(() => {
      console.log("App2 setup is done");
      re(8000);
    }, 2000);
  });
  return Promise.all([dbConnection(), appPromise]);
};

module.exports = { app2 };
