const constants = require('../config/constants');
const crudRepository = require('../database/crudRespositoryUser');
const mongoose = require('mongoose');
const Question = require('../models/db/Question');

module.exports.createQuestion = async (question) =>{
    const responseObj = constants.responseObj;

    try {
        const data = {
            model: new Question(question)
        }
        const responseFromBBDD = await crudRepository.insertQuestion(data);
        
        if (responseFromBBDD.status) {
            responseObj.status = constants.httpStatus.registered;
            responseObj.body = responseFromBBDD.result;
        }
    } catch (error) {
        console.log("ERROR-questionService-createQuestion: ", error);
    }
    return responseObj;
}

module.exports.update = async (dataFromController) =>{
    const responseObj = constants.responseObj;

    try {
        const data = {
            findQuery:{
                _id: mongoose.Types.ObjectId(dataFromController.id)
            },
            model: dataFromController,
            updateQuery: {},
            projection: {
                _id: false
            }
        };

        if (dataFromController.category) data.updateQuery.category = dataFromController.category;
        if (dataFromController.type) data.updateQuery.type = dataFromController.type;
        if (dataFromController.difficulty) data.updateQuery.difficulty = dataFromController.difficulty;
        if (dataFromController.question) data.updateQuery.question = dataFromController.question;
        if (dataFromController.correct_answer) data.updateQuery.correct_answer = dataFromController.correct_answer;
        if (dataFromController.incorrect_answer) data.updateQuery.incorrect_answer = dataFromController.incorrect_answer;
    
        const responseFromBBDD = await crudRepository.updateData(data);

        if (responseFromBBDD.status) {
            responseObj.status = constants.httpStatus.ok;
            responseObj.body = responseFromBBDD.result;
        }
    } catch (error) {
        console.log("ERROR-questionService-update: ", error);
    }
    return responseObj;
}