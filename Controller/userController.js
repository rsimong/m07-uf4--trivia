const constants = require('../config/constants');
const userService = require('../Services/userService');
const jwt = require('jsonwebtoken');

module.exports.register= async (request, response)=>{
    let responseObj = constants.responseObj;
    try {
        const user = request.body;
        console.log(user);
        
        /* const responseFromService = await userService.registerUser(user);

        if (responseFromService.status === constants.httpStatus.registered) {
            responseObj = responseFromService;
            responseObj.message = constants.controllerMessages.userRegistered;
        } */
    } catch (error) {
        console.log('ERROR-userController-register: ', error);
    }
    /* return response.status(responseObj.status).send(responseObj); */
}