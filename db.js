const dbConnection = () => {
  return new Promise((re, rj) => {
    setTimeout(() => {
      console.log("Db connection is done");
      re({ dbPort: 3000 });
    }, 3000);
  });
};

module.exports = { dbConnection };
