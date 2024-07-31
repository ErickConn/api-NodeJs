const validateTitle = (request, response, next) =>{
    if (! request.body.title){
        return response.status(400).json({ error: 'Title is required' })
    }
    next()
}

const validateDescription = (request, response, next) => {
    if (! request.body.description){
        return response.status(400).json({ error: 'Description is required'})
    }
    next()
}

module.exports = {
    validateTitle,
    validateDescription
}