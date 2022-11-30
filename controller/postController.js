const postModel = require("../model/postModel");

module.exports.createNewPost = async function (req, res) {
    try {
        // retrieve loggedin user id from req obj.
        const loggedInUserId = req.loggedInUserId;

        // retrieve title and description from req body and create postObj
        const postObj = req.body;
        postObj["userId"] = loggedInUserId;

        // check if post already exists
        const post = await postModel.findOne({ title: postObj.title });
        if (post) {
            return res
                .status(409)
                .json({ success: false, message: "post already exists" });
        }

        // create new post
        const newPost = await postModel.create(postObj);
        postObj["postID"] = newPost["_id"].toString();
        postObj["createdTime"] = newPost["createdAt"];

        // send success response
        res.json({ success: true, postObj });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
