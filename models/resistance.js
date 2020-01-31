const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
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
    weight: {
        type: Number,
        trim: true,
        required: "Weight required"
    },
    sets: {
        type: Number,
        trim: true,
        required: "Sets required"

    },
    Reps: {
        type: Number,
        trim: true,
        required: "Reps required"
    },
    Duration: {
        type: Number,
        trim: true,
        required: "Duration required"
    }
});

const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;