const userModel = require("../model/userModel");

module.exports.getUserById = async function (req, res) {
    try {
        // retrieve loggedin user id from req obj.
        const loggedInUserId = req.loggedInUserId;

        // query document from db using id
        const user = await userModel.findById(loggedInUserId);

        // respond with 404 error if user doesn't exist
        if (!user) {
            return res.status(404).json({ success: false, message: "user not found"});
        }

        // create userDetails obj using data from db
        const userDetails = {
            userName: user.email,
            numFollowers: user.followers.length,
            numFollowing: user.following.length,
        }
        // send success response
        res.json({ success: true, userDetails });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
