const bcrypt = require('bcrypt');

module.exports.insertData = async (data) => {
    try {
        bcrypt.hash(data.model.password, 10, async (error, hash) => {
            let responseObj = {satus: false};
            if (error) {
                console.log('ERROR to encript password: ', error);
            }
            data.model.password = hash;
            const docs = await data.model.save();

            responseObj = {
                result: docs,
                status: true
            };
        })
    } catch (e) {
        responseObj = {
            error: e,
            status: false
        };
    }
    return responseObj;
}