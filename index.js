const { app2 } = require("./app2");

async function main() {
  const port = await app2();
  console.log("Server is running at " + port);
}

main();
