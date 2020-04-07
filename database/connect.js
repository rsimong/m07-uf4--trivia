const mongoose = require('mongoose');

module.exports.createConnection = () => {
    const myPromise = new Promise((resolve, reject) => {
        mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if (err) {
                console.log('ERROR DB connection');
                return reject('ERROR DB connection');
            } else {
                console.log('DB Connected!');
                return resolve('DB Connected!');
            }
        });
    });
    return myPromise;
};
