const questionService = require('../Services/questionService');
const constants = require('../config/constants');

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
            responseObj.message = Constants.controllerMessages.questionUpdated;
        }
    } catch (error) {
        console.log("ERROR-questionController-updateQuestion: ", error);
    }
    return response.status(responseObj.status).send(responseObj);
}