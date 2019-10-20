const express = require('express');
const app = express()
const router = express.Router()

const config = require('./config')

const middlewares = require('./middleware')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json() 

const knex = require('knex')({
    client: 'mysql',
    connection: config.database
})

app.locals.knex = knex

// CORS configuration
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', ['GET, PUT, POST, DELETE']);
    res.append('Access-Control-Allow-Headers', ['Content-Type']);
    next();
})

const routes = require('./routes')

// API Routing
router.get('/users', routes.userList.listAllUsersKnex);
router.get('/users/:id', middlewares.checkID, routes.userList.listSingleUser);
router.post('/users', jsonParser, routes.userList.postUser);
router.put('/users/:id', jsonParser, middlewares.checkID, routes.userList.updateUser);
router.delete('/users/:id', middlewares.checkID, routes.userList.deleteUser);

app.use('/api', router);

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});