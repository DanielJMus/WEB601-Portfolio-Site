/* List information for all photoshops */
function listAllPhotoshops(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    knex
        .select('ID','Title', 'Description', 'ImageUrl')
        .from('tblPhotoshop')
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error))
}

/* List information for a single photoshop */
function listSinglePhotoshop(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex
        .select('ID','Title', 'Description', 'ImageUrl')
        .from('tblPhotoshop')
        .where({
            id: `${id}`
        })
        .then(data => {
            if (data.length > 0) {
                return res.status(200).json(data)
            } else {
                return res.status(404).json(`Photoshop with ID ${id} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

/* Add a photoshop to the database */
function postPhotoshop(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const payload = req.body
    const mandatoryColumns = ['Title','Description', 'ImageUrl']
    const payloadKeys = Object.keys(payload)
    const mandatoryColumnsExists = mandatoryColumns.every(mc => payloadKeys.includes(mc))
    if (mandatoryColumnsExists) {
        knex('tblPhotoshop')
            .insert(payload)
            .then(response => res.status(201).json('Photoshop record created'))
            .catch(error => res.status(500).json(error))
    } else {
        return res.status(400).json(`Mandatory Columns are required ${mandatoryColumns}`);
    }
}

function updatePhotoshop(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    const payload = req.body
    knex('tblPhotoshop')
        .where('id', id)
        .update(payload)
        .then(response => {
            if (response) {
                res.status(204).json()
            } else {
                return res.status(404).json(`Photoshop with id ${id} not found.`);
            }
        })
        .catch(error => res.status(500).json(error))
}

function deletePhotoshop(req, res) {
    // Destructuring 
    const {
        knex
    } = req.app.locals
    const {
        id
    } = req.params
    knex('tblPhotoshop')
        .where('id', id)
        .del()
        .then(response => {
            if (response) {
                res.status(200).json(`Photoshop with id ${id} is removed.`)
            } else {
                res.status(404).json(`Photoshop with id ${id} is not found.`)
            }
        })
        .catch(error => res.status(500).json(error))
}

module.exports = {
    listAllPhotoshops,
    listSinglePhotoshop,
    postPhotoshop,
    updatePhotoshop,
    deletePhotoshop
}