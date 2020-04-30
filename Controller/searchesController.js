'use strict'

// Import Repositories
const SearchesRepository = require('../database/searchesRepository');

module.exports.find = (req, res) => {
    SearchesRepository.find()
        .then((resp) => res.status(200).send(resp))
        .catch((error) => res.status(500).send({ error: 'An error occurred while searching searches', reason: error }));
};