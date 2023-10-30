const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db')

const URL = 'https://api.rawg.io/api/genres?key='

async function saveGenres (req, res) {
    try{
        const response = await axios(`${URL}${API_KEY}`)

        let genresArray = []
        let genresArrayUnique = []

        response.data.results.forEach((genre) => {
            genresArray = [...genresArray, genre.name];
        });

        genresArray.forEach((name) => {
           if(genresArrayUnique.indexOf(name) === -1){
            genresArrayUnique.push(name);
            Genre.findOrCreate({
                where: { name }
            });
           }
        })

        res.status(200).json(genresArrayUnique.sort());

    } catch (err) {
        return res.status(500).json({message: err.message})
        //errorHandler(res, err)
    }
}

module.exports = saveGenres;