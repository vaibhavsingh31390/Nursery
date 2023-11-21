const { json } = require("body-parser");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: "*",
  })
);
app.use(json());

const UsersRouter = require("./Routes/UsersRoutes");

app.use("/api/v1/", UsersRouter);

app.use("/", (req, res, next) => {
  res.status(200).json({
    status: true,
    message: "App is working....",
  });
});

module.exports = app;
