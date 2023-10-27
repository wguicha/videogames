require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

const URL = 'https://api.rawg.io/api/games?page_size=40&page=1&search='

async function getByName (req, res) {
    try{
        const games = [];
        const { keyWord } = req.params
        const response = await axios(`${URL}${keyWord}&key=${API_KEY}`)
            response.data.results.forEach((x) => {
                games.push({
                    name: x.name,
                    id: x.id,
                    platforms: x.platforms,
                    image: x.background_image,
                    releaseDate: x.released,
                    genres: x.genres,
                    rating: x.rating,
                    origin: "api"
                })
            })

        res.status(200).json(games);

    } catch (err) {
        console.log(err)
        return res.status(500).json({message: err.message})
        //errorHandler(res, err)
    }
}

module.exports = getByName;