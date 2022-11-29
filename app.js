// establishing connection to database
const connectToMongo = require("./db");
connectToMongo();

// initializing express app
const express = require('express');
const app = express();

// to read req.body in json
app.use(express.json())

// add route
app.get("/", (req, res) => {
  res.json({
    message: "home page"
  });
});

// use port 3000 unless there exists a preconfigured port
const port = process.env.PORT || 3000;
// for testing purpose
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Social Media app listening on port ${port}!`);
  });
}

module.exports = app;