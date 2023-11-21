const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config({ path: "./Config/config.env" });

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.DB_HOSTNAME,
  username: process.env.DB_USERNAME, // Assuming no password for a local MySQL database
  database: process.env.DB_NAME, // Change this to your desired database name
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
