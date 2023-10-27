/* eslint-disable eqeqeq */
export const filterGames = (games, key) => {
    return games.filter((game) => {
        var includesKey = false;
        game.genres.forEach(element => {
            console.log("Genre: ", element.name)
            console.log("Validacion: ", element.name === key, " -- ",element.name," -- ",key)
            if(element.name === key){
                includesKey = true;
            }
        })

        return includesKey;
    })


}