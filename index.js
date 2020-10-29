require('dotenv').config()

const server = require("./api/server.js")

const port = process.env.PORT || 5000
const secret = process.env.SECRET || "the secret for development"

console.log(secret, port);

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
