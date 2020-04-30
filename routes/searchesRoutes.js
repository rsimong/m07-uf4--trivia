'use strict'
const express = require('express');
const router = express.Router();

// Import Controllers
const SearchesController = require('../controller/searchesController');

router.get('/', SearchesController.find);

module.exports = router;