const constants = require('../config/constants');
const jwt = require('jsonwebtoken');

module.exports.validate = (req, res, next) => {
    return (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided' });
        jwt.verify(token.replace('Bearer ', ''), constants.secret_key, (err, decoded) => {
            if (err) return res.status(401).send({ auth: false, message: 'Failed to authenticate token' });
            req.userId = decoded.id;
            req.token = decoded;
            next();
        });
    };
}