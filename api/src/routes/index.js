const { Router } = require('express');
const getGames = require('../controllers/getGames.js')
const saveGenres = require('../controllers/saveGenres.js')
const getVideogameDetail = require('../controllers/getVideogameDetail.js')
const getByName = require('../controllers/getByName.js')
const postGame = require('../controllers/postGame.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.get('/videogames', getGames)
router.get('/genres', saveGenres)
router.get('/videogames/:idVideogame', getVideogameDetail)
router.get('/videogames/search/:keyWord', getByName)
router.post('/videogames', postGame)


module.exports = router;
