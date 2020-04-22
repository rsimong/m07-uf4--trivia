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
        const docs = await data.model.findOne(data.findQuery);

        console.log(docs);
        
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