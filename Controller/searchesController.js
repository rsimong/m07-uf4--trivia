'use strict'
const moment = require('moment');

// Import Repositories
const SearchesRepository = require('../database/searchesRepository');

module.exports.find = (req, res) => {
    const dateInputsFormats = ['YYYY-MM-DD', 'YYYYMMDD'];
    const dateFrom = req.params.from;
    const dateTo = req.params.to;
    let dateRange = {};
    if (dateFrom && dateTo) {
        dateRange = {
            "createdAt": {
                "$gte": moment(dateFrom, dateInputsFormats).subtract(1, 'd').toISOString(),
                "$lt": moment(dateTo, dateInputsFormats).add(1, 'd').toISOString()
            }
        };
    } else if (dateFrom) {
        dateRange = {
            "createdAt": {
                "$gte": moment(dateFrom, dateInputsFormats).subtract(1, 'd').toISOString()
            }
        };
    }
    SearchesRepository.find({ ...dateRange })
        .then((resp) => res.status(200).send(resp))
        .catch((error) => res.status(500).send({ error: 'An error occurred while searching searches', reason: error }));
};

module.exports.save = (req, res) => {
    SearchesRepository.create({ owner: req.userId })
        .then((resp) => res.status(200).send(resp))
        .catch((error) => res.status(500).send({ error: 'An error occurred while saving the search', reason: error }));
};

module.exports.update = (req, res) => {
    SearchesRepository.update(req.params.id, req.body)
        .then((resp) => res.status(200).send(resp))
        .catch((error) => res.status(500).send({ error: 'An error occurred while updating the search', reason: error }));
};

module.exports.delete = (req, res) => {
    SearchesRepository.delete(req.params.id)
        .then((resp) => res.status(200).send(resp))
        .catch((error) => res.status(500).send({ error: 'An error occurred while deleting the search', reason: error }));
};