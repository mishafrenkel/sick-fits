const { Prisma } = require("prisma-binding");

const db = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.SECRET
  // Turn on debug below by uncommenting to log queries in development
  // debug: true
});

module.exports = db;
