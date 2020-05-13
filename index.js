'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./database/connect');

const app = express();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8000';

// Handling Request Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define Routes
app.use('/api/v1/trivia/', require('./routes/triviaRoutes'));
app.use('/api/v1/searches/', require('./routes/searchesRoutes'));

// Database Connection
connect.createConnection();

app.listen(port, function () {
    console.log(`[Express] Server start!\n` +
        `[Express] Access URLs:\n` +
        `--------------------------------\n` +
        `   Local: http://localhost:${port}\n` +
        `External: ${host}:${port}\n` +
        `--------------------------------`);
});