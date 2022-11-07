const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, `{PATH} is required!`],
            minlength: [10, `{PATH} must be at least {MINLENGTH} characters`]
        },
        punchline: {
            type: String,
            required: [true, `{PATH} is required!`],
            minlength: [3, `{PATH} must be at least {MINLENGTH} characters`]
        },
    },
    {timestamps: true}
);


const Jokes = mongoose.model("Jokes", JokesSchema);

module.exports = {Jokes: Jokes};