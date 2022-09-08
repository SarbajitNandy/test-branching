const { app2 } = require("./app2");
const { app } = require("./app1");

async function main() {
  const port = await app2();
  port = app();
  console.log("Server is running at " + port);
}

main();
