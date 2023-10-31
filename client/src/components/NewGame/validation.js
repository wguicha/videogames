const validate = (newGame, errors, setErrors) => {

    let errorsName = [];
    let errorsImage = [];
    let errorsDescription = [];
    let errorsReleaseDate = [];
    let errorsRating = [];

    if(!newGame.name) {
        errorsName.push('El campo nombre esta vacio')
    }
    if(newGame.name.length <= 8 ) {
        errorsName.push('El nombre debe tener al menos 8 caracteres')
    }
    if(!newGame.image) {
        errorsImage.push('Debe agregar la URL de una imagen')
    }
    if(!newGame.description) {
        errorsDescription.push('Debe incluir una descripción')
    }
    if(!(newGame.rating > 0) || !(newGame.rating <= 5)) {
        errorsRating.push('Tu calificacion debe estar entre 0 y 5')
    }

    setErrors({
        name: errorsName,
        image: errorsImage,
        description: errorsDescription,
        releaseDate : errorsReleaseDate,
        rating: errorsRating,
     })
}

export default validate;
