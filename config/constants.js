module.exports = {
    responseObj: {
        status: 500,
        message: 'Internal server error',
        body: {}
    },
    httpStatus: {
        ok: 200,
        bad_request: 400,
        registered: 201
    },
    controllerMessages: {
        pageFound: 'Page found',
        userRegistered: 'User registered successfully',
        loguedUser: 'You Are Logued!',
        userInvalidCredentials: '¿Estas tonto o que?'
        
    },
    requestObj: {
        BODY_PARAMS: 'body',
        QUERY_PARAMS: 'query',
        PATH_PARAMS: 'path'
    },

    secret_key: "trivia"
}