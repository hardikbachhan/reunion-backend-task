const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
const JWT_SECRET = process.env.JWT_SECRET;

module.exports.createJWT = async function(req, res) {
    // create payload obj
    const payload = {
        userDetails: {
            userId: req.userId,
        }
    }
    // sign jwt token
    const token = await jwt.sign(payload, JWT_SECRET);
    // set token in headers and send as response
    res.set("Authorization", `Bearer ${token}`);
    res.json({message: "token created sucessfully", token});
}