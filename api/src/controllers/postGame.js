const { Genre, Videogame } = require('../db');

async function postGame (req, res) {

    try{
        //Traemos cada propiedad del body
        const { name, description, platforms, image, releaseDate, rating } = req.body;
        //Creamos un arreglo con la propiedad genres
        const genres = req.body.genres.split(', ')
        //creamos el registo en la tabla Videogames
        const newGame = await Videogame.create({
            name, description, platforms, image, releaseDate, rating
        });

        //Para cada elemento del array genre creamos la relacion

        for await (const element of genres) {
            //Se valida si el genero ya existe en la bd.
            const validGenre = await Genre.findAll(
                {where: {name : element}}
            )

            if(validGenre.length > 0){
                //Si el genero es encontrado se hace la relacion
                newGame.addGenre(validGenre)
            }else{
                //Si el genero no es encontrado se crea y se relaciona.
                const newGenre = await Genre.create({
                    name : element
                })
                newGame.addGenre(newGenre)
            }
        }

        res.status(201).json("Record Created");

    } catch (err) {
        return res.status(500).json({message: err.message})

    }
}

module.exports = postGame;