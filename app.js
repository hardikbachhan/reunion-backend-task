// establishing connection to database
const connectToMongo = require("./db");
connectToMongo();

// initializing express app
const express = require('express');
const app = express();

// to read req.body in json
app.use(express.json())

// router for user authentication
const authRouter = require("./routers/authRouter");

// router to get user details
const userRouter = require("./routers/userRouter");

// router for user actions
const followRouter = require("./routers/followRouter");
const unFollowRouter = require("./routers/unFollowRouter")

// user authentication
app.use("/api/authenticate", authRouter)

// user actions
app.use("/api/follow", followRouter);
app.use("/api/unfollow", unFollowRouter);

// get user details
app.use("/api/user", userRouter);


// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 3000;
// for testing purpose
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Social Media app listening on port ${port}!`);
  });
}

module.exports = app;