const express = require("express");
const postRouter = express.Router();
const { createNewPost, deletePost } = require("../controller/postController");
const { verifyUserByJWT } = require("../middlewares/verifyUserByJWT");

// ROUTE 5: - POST api/posts/ would add a new post created by the authenticated user.
//          - Input: Title, Description
//          - RETURN: Post-ID, Title, Description, Created Time(UTC).
postRouter
    .route("/")
    .post(verifyUserByJWT, createNewPost)

// ROUTE 6: - DELETE api/posts/{id} would delete post with {id} created by the authenticated user.
postRouter
    .route("/:id")
    .delete(verifyUserByJWT, deletePost);


module.exports = postRouter;