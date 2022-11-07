const express = require('express');
const cors = require('cors');
const {jokesRouter} = require('./routes/jokes.routes')

const port = 8000;

require('./config/mongoose.config');

const app = express();


app.use(cors());

app.use(express.json());

app.use('/api/jokes', jokesRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port} for request to respond to`);
});