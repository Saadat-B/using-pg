const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "saadat",
  database: "top_users",
  password: "",
  port: 5432, // The default port
});
