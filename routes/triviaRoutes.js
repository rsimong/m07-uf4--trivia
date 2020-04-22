const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const joiSchemaValidation = require('../Middlewares/joiSchemaValidation');
const constants = require('../config/constants');
const userSchema = require('../models/joi/userSchema');

/* Register user */
router.post('/register',
    joiSchemaValidation.validate(userSchema.registerUser, constants.requestObj.BODY_PARAMS),
    userController.register
);

module.exports = router;