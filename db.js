// file to connect with basic mongodb server.

// to read data from .env file
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URL;

const connectToMongo = () => {
    try {
        mongoose.connect(mongoURI,
            { useNewUrlParser: true, useUnifiedTopology: true },
            () => {
                console.log("Successfully connected to MongoDB Cloud");
            });
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectToMongo;
