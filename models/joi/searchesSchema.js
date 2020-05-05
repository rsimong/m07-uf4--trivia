'use strict'
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports = {
    uriParams: Joi.object({
        from: Joi.string().pattern(/(?:\d{4}-\d{2}-\d{2}|\d{4}\d{2}\d{2})/),
        to: Joi.string().pattern(/(?:\d{4}-\d{2}-\d{2}|\d{4}\d{2}\d{2})/)
    })
        .with('to', 'from'),

    uriSearchId: Joi.object({
        id: Joi.objectId().required()
    }),

    updateSearch: Joi.object({
        owner: Joi.objectId()
    })
}