const {createJokes} = require('../services/jokes.service');


const handleCreateJokes = async (req, res) => {
    console.log('controller: handleCreateJokes req.body: ', req.body);
    try {
        const jokes = await createJokes(req.body);
        return res.json(jokes)
    } catch (error) {
        return res.status(400).json(error);
    }
}


module.exports = {
    handleCreateJokes: handleCreateJokes
}