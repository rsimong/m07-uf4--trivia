const bcrypt = require('bcrypt');

        /* Registrar usuario */
module.exports.insertData = async (data) => {
    let responseObj = {satus: false};
    try {
        const docs = await data.model.save();

        responseObj = {
            result: docs,
            status: true
        };
    } catch (e) {
        responseObj = {
            error: e,
            status: false
        };
    }
    return responseObj;
}

        /* Login */
module.exports.findOne = async (data) =>{
    let responseObj = { status: false};
    try {
        const docs = await data.model.findOne(
            { username: data.findQuery.username }
        ) 
        responseObj = {
            result: docs,
            status: true
        };

    } catch (e) {
        responseObj = {
            error: e,
            status: false
        }
        console.log('ERROR-crudRepositoryUser-findOne: ', e);
    }
    return responseObj
}

        /*Question CRUD*/
module.exports.insertQuestion = async (data) =>{
    return new Promise((resolve, reject) => {
        data.model.save().then(docs => {
            const responseObj = {
                result: docs,
                status: true
            }
            resolve(responseObj)
        }).catch(err => {
            const responseObj = {
                result: err,
                status: false
            };
            reject(responseObj)
        })
    });
}

module.exports.updateData = (data) => {
    return new Promise((resolve, reject) => {
        data.model.findOneAndUpdate(data.findQuery, data.updateQuery,
            {new: true, projection: data.projection, useFindAndModify: false}
        )
        .then(docs =>{
            const responseObj = {
                result: docs,
                status: true
            }
            resolve(responseObj);
        }).catch(error => {
            const responseObj = {
                error: error,
                status: false
            }
            reject(responseObj)
        })
    })
}