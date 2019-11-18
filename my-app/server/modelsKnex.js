/* List information for all photoshops */
function listAllModels(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    knex
        .select('ID','Title', 'Description', 'Url', 'ImageUrl')
        .from('tblModels')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

/* List information for a single photoshop */
function listSingleModel(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex
        .select('ID','Title', 'Description', 'Url', 'ImageUrl')
        .from('tblModels')
        .where({
            id: `${id}`
        })
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Model with ID ${id} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

/* Add a photoshop to the database */
function postModel(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const payload = req.body
    const mandatoryColumns = ['Title', 'Description', 'Url', 'ImageUrl']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    if (mandatoryColumnsExists) {
        knex('tblModels')
            .insert(payload)
            .then(response => res.status(201).json('Model record created'))
            .catch(error => res.status(500).json(error))
    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

function updateModel(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    const payload = req.body
    knex('tblModels')
        .where('id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json()
            } else {
                return res.status(404).json(`Model with id ${id} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

function deleteModel(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex('tblModels')
        .where('id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Model with id ${id} is removed.`)
            } else {
                res.status(404).json(`Model with id ${id} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllModels,
    listSingleModel,
    postModel,
    updateModel,
    deleteModel
}