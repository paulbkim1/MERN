const {Jokes} = require("../models/jokes.model");

const createJokes = async (data) => {
    console.log('service: createJokes');
    const jokes = await Jokes.create(data);
    return jokes;
}

const getAllJokes = async () => {
    console.log('service: getAllJokes');
    const jokes = await Jokes.find();
    return jokes;
}

const getJokesById = async (_id) => {
    console.log(_id)
    console.log('service: getJokesById');
    const joke = await Jokes.findById(_id);
    return joke;
}

const getRandomJokes = async () => {
    console.log('service: getRandomJokes');
    const joke = await Jokes.find();
    return joke;
}

const deleteJokesById = async (_id) => {
    console.log('service: deleteJokesById');
    const joke = await Jokes.findByIdAndDelete(_id);
    return joke;
}

const getJokesByIdAndUpdate = async (_id,data) => {
    console.log('service: getJokesByIdAndUpdate');
    const joke = await Jokes.findByIdAndUpdate({_id : _id}, data, {
        runValidators: true,
        new: true
    });
    return joke;
}

module.exports = {
    createJokes: createJokes, getAllJokes, getJokesById, getRandomJokes, deleteJokesById, getJokesByIdAndUpdate,
};