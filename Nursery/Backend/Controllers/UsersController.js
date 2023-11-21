const jwt = require("jsonwebtoken");
const sequelize = require("../Database/index");
const { QueryTypes } = require("sequelize");

exports.login = async (req, res, next) => {
  try {
    const query = `
      SELECT * 
      FROM users 
      WHERE username = :username 
      AND password = :password
    `;

    const [user, metadata] = await sequelize.query(query, {
      replacements: {
        username: req.body.username,
        password: req.body.password,
      },
      type: QueryTypes.SELECT,
    });

    if (user) {
      const userPayload = {
        user_id: user.user_id,
        username: user.username,
      };

      const token = jwt.sign(userPayload, "1W4!wC8Fp&*JzL@2m9GqKu#sE$R7nY", {
        expiresIn: "1h",
      });

      res.status(200).json({
        status: true,
        message: "Logged In",
        token: token,
      });
    } else {
      // No user found with the provided credentials
      res.status(403).json({
        status: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Server error. Please try again.",
    });
  }
};

exports.register = async (req, res, next) => {
  try {
    const query = `
    INSERT INTO users (username, password, email)
    VALUES (:username, :password, :email);
    `;

    const [user, metadata] = await sequelize.query(query, {
      replacements: {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      type: QueryTypes.INSERT,
    });
    if (user) {
      const userPayload = {
        user_id: user,
        username: req.body.username,
      };

      const token = jwt.sign(userPayload, "1W4!wC8Fp&*JzL@2m9GqKu#sE$R7nY", {
        expiresIn: "1h",
      });

      res.status(200).json({
        status: true,
        message: "Registered !",
        token: token,
      });
    } else {
      // No user found with the provided credentials
      res.status(403).json({
        status: false,
        message: "Invalid data.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Server error. Please try again.",
    });
  }
};
