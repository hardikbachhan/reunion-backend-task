const express = require("express");
const authRouter = express.Router();
const { authenticateUser } = require("../controller/authController");
const { createJWT } = require("../middlewares/createJWT");

// Route 1: Use dummy email & password for authentication. No need to create endpoint for registering new user.  ->  implemented in userModel.js

// ROUTE 2: POST /api/authenticate should perform user authentication and return a JWT token.
// - INPUT: Email, Password
// - RETURN: JWT token
authRouter
    .route("/")
    .post(authenticateUser, createJWT)




module.exports = authRouter;