const express = require("express");
const userRouter = express.Router();
const { getUserById } = require("../controller/userController");
const { verifyUserByJWT } = require("../middlewares/verifyUserByJWT");

// ROUTE 4: - GET /api/user should authenticate the request and return the respective user profile.
//          - RETURN: User Name, number of followers & followings.
userRouter
    .route("/")
    .get(verifyUserByJWT, getUserById)




module.exports = userRouter;