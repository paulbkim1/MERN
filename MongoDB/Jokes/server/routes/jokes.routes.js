const express = require('express');

const {
    handleCreateJokes, handleGetAllJokes, handleRandomJokes, handleGetJokesById, handleDeleteJokesById, handleUpdateJokesById
} = require('../controllers/jokes.controller')

const router = express.Router();


router.get('', handleGetAllJokes)
router.get('/:_id', handleGetJokesById)
router.get('/random/joke', handleRandomJokes)
router.post('/new', handleCreateJokes)
router.put('/update/:_id', handleUpdateJokesById)
router.delete('/delete/:_id', handleDeleteJokesById)


module.exports = {jokesRouter: router}