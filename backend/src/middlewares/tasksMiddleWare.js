const validateTitle = (request, response, next) =>{
    if (! request.body.title){
        return response.status(400).json({ error: 'Title is required' })
    }
    if (request.body.title.length > 255){
        return response.status(500).json({ error: 'Invalid title' })
    }
    next()
}

const validateDescription = (request, response, next) => {
    if (! request.body.description){
        return response.status(400).json({ error: 'Status is required'})
    }
    if (request.body.description !== "Active" && request.body.description !== "Completed"){
        return response.status(400).json({ error: 'Status are only Active or Completed'})
    }
    next()
}

module.exports = {
    validateTitle,
    validateDescription
}