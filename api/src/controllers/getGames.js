require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db');

const URL = 'https://rawg.io/api/games?page_size=40&key='

async function getGames (req, res) {
    try{
        const games = [];
        for (let i = 1; i <= 4; i++){

            let response = await axios(`${URL}${API_KEY}&page=${i}`)

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
        }

        let gamesCount = games.length;

        const gamesDb = await Videogame.findAll(
            { include: {model: Genre}}
        );

        for (const game of gamesDb){
            games.push(
            {
                name: game.name,
                id: gamesCount + 1,
                description: game.description,
                platforms: game.platforms,
                image: game.image,
                rating: game.rating,
                releaseDate: game.releaseDate,
                genres: game.genres,
                origin: "db",
            }
            )
            gamesCount = games.length;
        }

        res.status(200).json(games);

    } catch (err) {
        console.log(err)
        return res.status(500).json({message: err.message})
        //errorHandler(res, err)
    }
}

module.exports = getGames;