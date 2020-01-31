const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Workout type required"
    },
    name: {
        type: String,
        trim: true,
        required: "Workout name required"
    },
    Distance: {
        type: Number,
        trim: true,
        required: "Distance required"
    },
    Duration: {
        type: Number,
        trim: true,
        required: "Duration required"
    }
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;