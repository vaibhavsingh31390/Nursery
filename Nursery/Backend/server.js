const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./Config/config.env" });

const DB = require("./Database/index");

DB.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(
    `${process.env.NODE_ENV} server running on port ${process.env.PORT}.`
  );
});
