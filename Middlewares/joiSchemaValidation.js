const constant = require("../config/constants")

module.exports.validate = (schema,validation) =>{
    return (request, response,next)=>{
        let objToValidate = {};
        if (validation === constant.requestObj.BODY_PARAMS) {
            objToValidate = request.body;
        }else if (validation === constant.requestObj.QUERY_PARAMS) {
            objToValidate = request.query;
        }else if (validation === constant.requestObj.PATH_PARAMS) {
            objToValidate = request.params;
        }

        const result = schema.validate(objToValidate);

        if (result.error) {
            const errorDetail = result.error.details.map((value) => {
                return value.message;
            });
            const responseObj = {
                status: constant.httpStatus.bad_request,
                body: errorDetail
            }
            return response.status(responseObj.status).send(responseObj)
        }else{
            next();
        }
    };
};