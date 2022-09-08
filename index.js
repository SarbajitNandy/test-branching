const { app } = require("./app1");

function main() {
  const port = app();
  console.log("Server is running at " + port);
}

main();
