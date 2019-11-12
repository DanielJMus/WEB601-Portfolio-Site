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

router.get('/photoshops', routes.photoshopList.listAllPhotoshops);
router.get('/photoshops/:id', middlewares.checkID, routes.photoshopList.listSinglePhotoshop);
router.post('/photoshops', jsonParser, routes.photoshopList.postPhotoshop);
router.put('/photoshops/:id', jsonParser, middlewares.checkID, routes.photoshopList.updatePhotoshop);
router.delete('/photoshops/:id', middlewares.checkID, routes.photoshopList.deletePhotoshop);

router.get('/gamedev', routes.gamedevList.listAllGameDevs);
router.get('/gamedev/:id', middlewares.checkID, routes.gamedevList.listSingleGameDev);
router.post('/gamedev', jsonParser, routes.gamedevList.postGameDev);
router.put('/gamedev/:id', jsonParser, middlewares.checkID, routes.gamedevList.updateGameDev);
router.delete('/gamedev/:id', middlewares.checkID, routes.gamedevList.deleteGameDev);


app.use('/api', router);

app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});