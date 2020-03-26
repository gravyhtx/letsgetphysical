const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercise = new Schema ({

    type: {
        type: String,
        require: "Please choose an exercise"
    },

    name: {
        type: String,
        require: "Please choose an exercise"
    },

    duration: {
        type: Number,
        minimum: 0
    },

    weight: {
        type: Number,
        minimum: 0
    },

    reps: {
        type: String,
        minimum: 0
    },

    sets: {
        type: Number,
        minimum: 0
    },

    distance: {
        type: Number,
        minimum: 0
    },

    created: {
        type: Date,
        default: Date.now
    },

})

// const Exercise = mongoose.model("Exercise", WorkOut)
// module.exports = Exercise