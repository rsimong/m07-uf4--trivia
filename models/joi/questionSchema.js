const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const incorrect_answers = Joi.object();

const arraySchema = Joi.array().items(incorrect_answers).unique().required();

module.exports = {

    createQuestion: Joi.object({
        category: Joi.string().min(3).required(),
        type: Joi.string().min(3).required(),
        difficulty: Joi.string().min(3).required(),
        question: Joi.string().min(3).required(),
        correct_answer: Joi.string().min(3).required(), 
        incorrect_answer: Joi.alternatives().try(incorrect_answers, arraySchema).required()

    }),
    updateQuestion: Joi.object({
        category: Joi.string().min(3),
        type: Joi.string().min(3),
        difficulty: Joi.string().min(3),
        question: Joi.string().min(3),
        correct_answer: Joi.string().min(3), 
        incorrect_answer: Joi.alternatives().try(incorrect_answers, arraySchema)
    }),
    questionIdSchema: Joi.object({
        id: Joi.objectId().required()
    })

}