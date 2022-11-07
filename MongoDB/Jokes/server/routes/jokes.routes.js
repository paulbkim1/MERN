const express = require('express');

const {
    handleCreateJokes
} = require('../controllers/jokes.controller')

const router = express.Router();


router.post('/', handleCreateJokes)


module.exports = {jokesRouter: router}