'use strict'
const constants = require('../config/constants');
const express = require('express');
const router = express.Router();

// Import Models
const searchesSchema = require('../models/joi/searchesSchema');

// Import Middlewares
const tokenValidation = require('../middlewares/tokenValidation');
const joiSchemaValidation = require('../middlewares/joiSchemaValidation');

// Import Controllers
const SearchesController = require('../controller/searchesController');


// =========================================
// Define Routes
// =========================================

// List Searches (Filtered or Not filtered)
router.get('/:from?/:to?',
    tokenValidation.validate(),
    joiSchemaValidation.validate(searchesSchema.uriParams, constants.requestObj.PATH_PARAMS),
    SearchesController.find);

// Create Search
router.post('/',
    tokenValidation.validate(),
    SearchesController.save);

// Update Search
router.put('/:id',
    tokenValidation.validate(),
    joiSchemaValidation.validate(searchesSchema.uriSearchId, constants.requestObj.PATH_PARAMS),
    joiSchemaValidation.validate(searchesSchema.updateSearch, constants.requestObj.BODY_PARAMS),
    SearchesController.update);

// Delete Search
router.delete('/:id',
    tokenValidation.validate(),
    joiSchemaValidation.validate(searchesSchema.uriSearchId, constants.requestObj.PATH_PARAMS),
    SearchesController.delete);

// =========================================


module.exports = router;