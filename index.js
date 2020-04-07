const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const connect = require('./database/connect');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

async function connectDB() {
    try {
        await connect.createConnection();
    } catch (error) {
        console.log('ERROR-createConnection', error);
        
    }
}

connectDB();

app.use('/api/v1/*nuestra raiz*/', require('./routes/movieRoutes'));

app.listen(process.env.PORT, function() {
    console.log('Server start!', 
        `ApiRest listening on port ${process.env.PORT}!`);
});