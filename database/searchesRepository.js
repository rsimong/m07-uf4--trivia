'use strict'
const Searches = require('../models/db/Searches');

class SearchesRepository {
    constructor(model) {
        this.model = model;
    }

    async find(filters = {}) {
        return await this.model.find(filters);
    }

    async create(data) {
        return await this.model.create(data);
    }

    async update(objId, data, options = { new: true }) {
        return await this.model.findOneAndUpdate({ _id: objId }, { ...data }, { ...options });
    }

    async delete(objId) {
        return await this.model.deleteOne({ _id: objId });
    }

}

module.exports = new SearchesRepository(Searches);