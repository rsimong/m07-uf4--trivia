'use strict'
const Searches = require('../models/db/Searches');

class SearchesRepository {
    constructor(model) {
        this.model = model;
    }

    async find() {
        return await this.model.find();
    }

}

module.exports = new SearchesRepository(Searches);