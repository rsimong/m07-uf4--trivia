const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const quetionController = require('../controller/questionController');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');
const constants = require('../config/constants');
const userSchema = require('../models/joi/userSchema');
const questionSchema = require('../models/joi/questionSchema');
const tokenValidation = require('../middlewares/tokenValidation')

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

router.get('/', 
    tokenValidation.validate,
    quetionController.getAllQuestions
)

router.post('/create', 
    joiSchemaValidation.validate(questionSchema.createQuestion, constants.requestObj.BODY_PARAMS),
    tokenValidation.validate,
    quetionController.creaetQuestion
);

router.put('/:id', 
    joiSchemaValidation.validate(questionSchema.questionIdSchema, constants.requestObj.PATH_PARAMS),
    joiSchemaValidation.validate(questionSchema.updateQuestion, constants.requestObj.BODY_PARAMS),
    tokenValidation.validate,
    quetionController.updateQuestion
);

router.delete('/:id',
    joiSchemaValidation.validate(questionSchema.questionIdSchema, constants.requestObj.PATH_PARAMS),
    tokenValidation.validate,
    quetionController.destroy
    
)

        /**Test */
router.get('/saludo', tokenValidation.validate,
    (request,response)=>{
        return response.send('Hola Oriol');
    }
)

module.exports = router;