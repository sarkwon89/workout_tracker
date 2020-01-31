const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        trim: true
    },
    name: {
        type: String,
        trim: true
    },
    weight: {
        type: Number,
        trim: true
    },
    sets: {
        type: Number,
        trim: true

    },
    Reps: {
        type: Number,
        trim: true
    },
    Distance: {
        type: Number,
        trim: true
    },
    Duration: {
        type: Number,
        trim: true
    },
    exercises: []
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;