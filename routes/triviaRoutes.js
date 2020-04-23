const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const joiSchemaValidation = require('../Middlewares/joiSchemaValidation');
const constants = require('../config/constants');
const userSchema = require('../models/joi/userSchema');
const tokenValidation = require('../Middlewares/tokenValidation')

        /* Register user */
router.post('/register',
    joiSchemaValidation.validate(userSchema.registerUser, constants.requestObj.BODY_PARAMS),
    userController.register
);

        /* Login */
router.post('/login',
    joiSchemaValidation.validate(userSchema.authenticateSchema, constants.requestObj.BODY_PARAMS),
    userController.authenticate
);

router.get('/saludo', tokenValidation.validate,
    (request,response)=>{
        return response.send('Hola Oriol');
    }
    
)

module.exports = router;