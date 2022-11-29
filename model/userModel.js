// user schema
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: function() {
            return emailValidator.validate(this.email);
        }
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
    }
}, { timeStamps: true });

//model creation
const userModel = mongoose.model("userModel", userSchema);