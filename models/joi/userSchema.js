const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    registerUser: Joi.object({
        username: Joi.string().required().min(4).max(10),
        password: Joi.string().required().min(8).alphanum()
    })
}