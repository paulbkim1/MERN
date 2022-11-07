const {Jokes} = require("../models/jokes.model");

const createJokes = async (data) => {
    console.log('service: createJokes');
    const jokes = await Jokes.create(data);
    return jokes;
}



module.exports = {
    createJokes: createJokes
};