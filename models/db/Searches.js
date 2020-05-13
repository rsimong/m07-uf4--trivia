'use strict'
const mongoose = require(`mongoose`);
const moment = require('moment');
const { Schema } = mongoose;

// Import Others Schemas
const User = require('./User');

const schema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    versionKey: false,
    timestamps: { currentTime: () => moment().toISOString() }
});

const Searches = mongoose.model(`Searches`, schema);
module.exports = Searches;