const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true,
    },
    fitnessGoal: {
        type: String,
        required: true,
    },
    peanutsAllergy: {
        type: Boolean,
        required: true,
    },
    dairyAllergy: {
        type: Boolean,
        required: true,
    },
    shellfishAllergy: {
        type: Boolean,
        required: true,
    },
    dailyMealBudget: {
        type: Number,
        required: true,
    }
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel