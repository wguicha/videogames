require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');

const URL = 'https://api.rawg.io/api/games/'

async function getVideogameDetail (req, res) {
    
    try{
        const { idVideogame } = req.params

            const response = await axios(`${URL}${idVideogame}?key=${API_KEY}`)

            const platforms = response.data.platforms.map((x) => x.platform.name).join(', ');

            const genres = response.data.genres.map((x) => x.name).join(', ');

        const game = {
            name: response.data.name,
            background_image: response.data.background_image,
            background_image_additional: response.data.background_image_additional,
            description: response.data.description,
            rating: response.data.rating,
            released: response.data.released,
            platforms: platforms,
            genres: genres

        }

        res.status(200).json(game);

    } catch (err) {
        console.log(err)
        return res.status(500).json({message: err.message})
        //errorHandler(res, err)
    }
}

module.exports = getVideogameDetail;