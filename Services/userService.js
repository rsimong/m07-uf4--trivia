const axios = require('axios');
const constants = require('../config/constants');
const User = require('../models/db/User');
const crudRepositoryUser = require('../database/crudRespositoryUser');
const mongoose = require('mongoose');

module.exports.registerUser = async (user) => {
    const responseObj = constants.responseObj;

    try {
        const data = {
            model: new User(user)
        }
        const responseFromBBDD = await crudRepositoryUser.insertData(data);
        if (responseFromBBDD.status === constants.httpStatus.registered) {
            responseObj.status = constants.httpStatus.registered;
            responseObj.body = responseFromBBDD.result;
        }
    } catch (error) {
        console.log('ERROR-userService-registerUser: ', error);
    }
    return responseObj;
}