const mongoose = require('mongoose');

module.exports.createConnection = async () => {
    await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
        (err) => {
            if (err) {
                console.log('[Mongoose] ERROR DB connection');
                console.log(`[Mongoose] ERROR Msg: ${err.message}`);
            } else {
                console.log('[Mongoose] DB Connected!');
            }
        });
};
