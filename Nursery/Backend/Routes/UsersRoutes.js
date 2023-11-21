const express = require("express");
const Router = express.Router();
const Controller = require("../Controllers/UsersController");
Router.route("/login").post(Controller.login);
Router.route("/register").post(Controller.register);

module.exports = Router;
