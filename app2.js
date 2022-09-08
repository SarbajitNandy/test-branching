const app2 = () => {
  return new Promise((re, rj) => {
    setTimeout(() => {
      console.log("App2 setup is done");
      re(8000);
    }, 2000);
  });
};

module.exports = { app2 };
