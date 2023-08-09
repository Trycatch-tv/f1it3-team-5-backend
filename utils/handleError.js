const handlerError = (res,message,code) => {
    return res.status(code).send({error: message})
}

module.exports= handlerError