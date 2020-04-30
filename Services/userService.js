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
        if (responseFromBBDD.status) {
            responseObj.status = constants.httpStatus.registered;
            responseObj.body = responseFromBBDD.result;
        }
    } catch (error) {
        console.log('ERROR-userService-registerUser: ', error);
    }
    return responseObj;
}

module.exports.authenticate = async (user) =>{
    const responseObj = constants.responseObj;
    try {
        const data ={
            findQuery: {
                username: user.username,
                password: user.password
            },
            model: User
        };
        const responseFromBBDD = await crudRepositoryUser.findOne(data);
        if (responseFromBBDD.status) {
            if (responseFromBBDD.result) {
                responseObj.status = constants.httpStatus.ok;
                responseObj.body = responseFromBBDD.result;
            } else {
                responseObj.body = constants.httpStatus.bad_request
            }
        }
    } catch (error) {
        console.log('ERROR-userService-authenticate: ', error);
    }
    return responseObj;
}