const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const quetionController = require('../Controller/questionController');
const joiSchemaValidation = require('../Middlewares/joiSchemaValidation');
const constants = require('../config/constants');
const userSchema = require('../models/joi/userSchema');
const questionSchema = require('../models/joi/questionSchema');
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


        /*Questions CRUD*/
router.post('/create', 
    joiSchemaValidation.validate(questionSchema.createQuestion, constants.requestObj.BODY_PARAMS),
    tokenValidation.validate,
    quetionController.creaetQuestion
);

router.put('/:id', 
    joiSchemaValidation.validate(questionSchema.questionIdSchema, constants.requestObj.PATH_PARAMS),
    joiSchemaValidation.validate(questionSchema.updateQuestion, constants.requestObj.BODY_PARAMS)
    
)



        /**Test */
router.get('/saludo', tokenValidation.validate,
    (request,response)=>{
        return response.send('Hola Oriol');
    }
)

module.exports = router;