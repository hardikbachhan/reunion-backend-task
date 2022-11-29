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
    // sent token as response
    res.json({token});
}