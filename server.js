const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to ZipCode API' });
});

require("./routes/zip-codes.routes.js")(app);

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log('Server is running on port 3000');
});