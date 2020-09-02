
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    phone: {
        type: Number,
        required: true,
    },
    bid: {
        type: Number,
    },
    status: {
        type: String,
        required: true,
    },
});

//A RANDOM MODEL TO USE



module.exports = User = mongoose.model("user", UserSchema);