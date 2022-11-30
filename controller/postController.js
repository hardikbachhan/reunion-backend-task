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

module.exports.deletePost = async function (req, res) {
    try {
        // retrieve loggedin user id from req obj.
        const loggedInUserId = req.loggedInUserId;

        // retrieve post id from params
        const postId = req.params.id;

        // check if post exists
        const post = await postModel.findById(postId);
        if (!post) {
            return res
                .status(404)
                .json({ success: false, message: "post not found" });
        }

        // check if loggedInId is same as the id that created the post.
        if (loggedInUserId !== post.userId) {
            return res
                .status(403)
                .json({ success: false, message: "access denied" });
        }

        post.remove(postId);
        return res.json({ success: true, message: "post deleted successfully" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
