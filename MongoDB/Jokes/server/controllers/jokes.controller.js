const {createJokes,  getAllJokes, getJokesById, getRandomJokes, deleteJokesById, getJokesByIdAndUpdate} = require('../services/jokes.service');

const handleCreateJokes = async (req, res) => {
    console.log('controller: handleCreateJokes req.body: ', req.body);
    try {
        const jokes = await createJokes(req.body);
        return res.json(jokes)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllJokes = async (req, res) => {
    console.log('controller: handleGetAllJokes');
    try {
        const jokes = await getAllJokes();
        return res.json(jokes)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetJokesById = async (req, res) => {
    console.log('controller: handleGetJokesById rew.params: ', req.params);
    try {
        const joke = await getJokesById(req.params);
        return res.json(joke)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleRandomJokes = async (req, res) => {
    console.log('controller: handleRandomJokes');
    try {
        const joke = await getRandomJokes();
        const randomIndex = Math.floor(joke.length*Math.random())
        return res.json(joke[randomIndex])
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteJokesById = async (req, res) => {
    console.log('controller: handleDeleteJokesById req.params: ', req.params._id);
    try {
        const joke = await deleteJokesById(req.params._id);
        return res.json(joke)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateJokesById = async (req, res) => {
    console.log('controller: handleUpdateJokesById req.params: ', req.params._id, "\n req.body :", req.body);
    try {
        const joke = await getJokesByIdAndUpdate(req.params._id, req.body);
        return res.json(joke)
    } catch (error) {
        return res.status(400).json(error);
    }
}


module.exports = {
    handleCreateJokes: handleCreateJokes, handleGetAllJokes,handleRandomJokes, handleGetJokesById, handleDeleteJokesById, handleUpdateJokesById
}