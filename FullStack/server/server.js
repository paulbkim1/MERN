const express = require('express');
const cors = require('cors');
const {productsRouter} = require('./routes/products.routes')

const port = 8000;

require('./config/mongoose.config');

const app = express();


app.use(cors());

app.use(express.json());

app.use('/api/products', productsRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port} for request to respond to`);
});