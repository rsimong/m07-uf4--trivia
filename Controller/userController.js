const constants = require('../config/constants');
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.register = async (request, response) => {
    let responseObj = constants.responseObj;
    try {
        let user = {
            username: request.body.username,
            password: await bcrypt.hash(request.body.password, 10)
        }

        const responseFromService = await userService.registerUser(user);

        if (responseFromService.status === constants.httpStatus.registered) {
            responseObj = responseFromService;
            responseObj.message = constants.controllerMessages.userRegistered;
        }
    } catch (error) {
        console.log('ERROR-userController-register: ', error);
    }
    return response.status(responseObj.status).send(responseObj);
}

module.exports.authenticate = async (request, response) => {
    const responseObj = constants.responseObj;
    try {
        const user = request.body;
        const responseFromService = await userService.authenticate(user);

        if (responseFromService.status === constants.httpStatus.ok && await bcrypt.compareSync(user.password,responseFromService.body.password)) {
            console.log("Generar token");
            
            const token = jwt.sign(
                {
                    id: responseFromService.body._id
                },
                constants.secret_key,
                { expiresIn: '1h' }
            );
            responseObj.body = token;
            responseObj.message = constants.controllerMessages.loguedUser;
        } else if (responseFromService.status === constants.httpStatus.bad_request) {
            responseObj = responseFromService;
            responseObj.message = constants.controllerMessages.userInvalidCredentials;
        }
    } catch (error) {
        console.log('ERROR-userController-authenticate: ', error);
    }
    return response.status(responseObj.status).send(responseObj);
}