const { app2 } = require("./app2");
const { app } = require("./app1");
const config = require("./config.json");

async function main() {
  const [port] = await Promise.all([app(), app2()]);
  console.log("Server is running at " + port + "\nBranches " + config.branch);
}

main();
