const questionService = require('../services/questionService');
const constants = require('../config/constants');


module.exports.getAllQuestions = async (response) =>{
    let responseObj = constants.responseObj;

    try {
        const responseFromService = await questionService.getAllQuestion();

        if(responseFromService.status === constants.httpStatus.ok){
            responseObj = responseFromService;
            responseObj.message = constants.controllerMessages.questionCreated;
            responseObj.body = request.body;
        }
    } catch (error) {
        console.log("ERROR-questionController-getAllQuestion: ", error);
    }

    return response.status(responseObj.status).send(responseObj);
}

module.exports.creaetQuestion = async (request, response) =>{
    let responseObj = constants.responseObj;    
    try {
        const question = request.body;
        
        const responseFromService = await questionService.createQuestion(question);
        
        if(responseFromService.status === constants.httpStatus.registered){
            responseObj = responseFromService;
            responseObj.message = constants.controllerMessages.questionCreated;
            responseObj.body = request.body;
        }
    } catch (error) {
        console.log("ERROR-Controller-createQuestion: ", error);
    }
    return response.status(responseObj.status).send(responseObj);
}

module.exports.updateQuestion = async (request, response) =>{
    let responseObj = constants.requestObj;

    try {
        const question = request.body;
        question.id = request.params.id;

        const responseFromService = await questionService.update(question);

        if (responseFromService.status === constants.httpStatus.ok) {
            responseObj = responseFromService;
            responseObj.message = constants.controllerMessages.questionUpdated;
        }
    } catch (error) {
        console.log("ERROR-questionController-updateQuestion: ", error);
    }
    return response.status(responseObj.status).send(responseObj);
}

module.exports.destroy = async (request, response) => {
    let responseObj = constants.requestObj;

    try {
        const questionId = request.params.id;

        const responseFromService = await questionService.delete(questionId);

        if (responseFromService === constants.httpStatus.ok) {
            responseObj = responseFromService;
            responseObj.message = constants.controllerMessages.questionDeleted;
        }
    } catch (error) {
        console.log("ERROR-questionController-destroy: ", error)
    }
    return response.status(responseObj.status).send(responseObj);
}