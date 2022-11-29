const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

// user schema
const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            validate: function () {
                return emailValidator.validate(this.email);
            },
        },
        password: {
            type: String,
            required: true,
        },
        followers: {
            type: Array,
            default: [],
        },
        following: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

// model creation
const userModel = mongoose.model("user", userSchema);

// create new user
try {
    async function createUser() {
        let email = "def@gmail.com";
        let password = "def123456";
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(password, salt);
        const userDetails = {
            email,
            password: hash,
        };
        const user = await userModel.create(userDetails);
        console.log(user);
    }
    // createUser();
} catch (error) {
    console.log(error.message);
}

module.exports = userModel;
