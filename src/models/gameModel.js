const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    developer: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    mode: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('game', gameSchema);