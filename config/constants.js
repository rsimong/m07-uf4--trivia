module.exports = {
    responseObj: {
        status: 500,
        message: 'Internal server error',
        body: {}
    },
    httpStatus: {
        ok: 200,
        bad_request: 400,
        created: 201
    },
    controllerMessages: {
        pageFound: 'Page found'
        
    },
    requestObj: {
        BODY_PARAMS: 'body',
        QUERY_PARAMS: 'query',
        PATH_PARAMS: 'path'
    }
}