

class CustomAPIError extends Error{
    constructor(statusCode,msg){
        super(msg)
        this.statusCode =statusCode

    }
}

const createCustomError =(statusCode,msg)=>{
    return new CustomAPIError(statusCode,msg)
}

module.exports = {createCustomError, CustomAPIError}