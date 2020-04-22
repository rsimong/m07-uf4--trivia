const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const connect = require('./database/connect');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


connect.createConnection();

app.use('/api/v1/trivia/', require('./routes/triviaRoutes'));

app.listen(process.env.PORT, function() {
    console.log('Server start!', 
        `Trivia app listening on port ${process.env.PORT}!`);
});