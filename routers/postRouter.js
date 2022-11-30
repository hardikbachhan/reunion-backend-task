const express = require("express");
const postRouter = express.Router();
const { createNewPost } = require("../controller/postController");
const { verifyUserByJWT } = require("../middlewares/verifyUserByJWT");

// ROUTE 5: - POST api/posts/ would add a new post created by the authenticated user.
//          - Input: Title, Description
//          - RETURN: Post-ID, Title, Description, Created Time(UTC).
postRouter
    .route("/")
    .post(verifyUserByJWT, createNewPost)




module.exports = postRouter;