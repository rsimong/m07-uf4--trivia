'use strict'
const Joi = require('@hapi/joi');

module.exports = {
    queryParams: Joi.object({
        date_from: Joi.date(),
        date_to: Joi.date()
    })
        .with('date_to', 'date_from')
}