import styles from "./NewGame.module.css";
import { useState, useEffect } from "react";
import Nav from '../Nav/Nav';
import validate from "./validation";
import { MdAddCircle } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { postGame } from "../../utils/postGame";
import { FaRegSave } from 'react-icons/fa';
import { addGame } from '../../redux/actions';
import gameImage from '../../assets/game_image.png'

export default function NewGame() {
  const genres = useSelector((state) => state.genres)
  const [selectedGenre, setSelectedGenre] = useState("")
  const [listGenres, setListGenres] = useState("")

  const emptyGame = {
    name: "",
    image: "",
    description: "",
    genres: "",
    platforms: "",
    rating: 0,
    releaseDate: 0,
  }

  const dispatch = useDispatch()

  const [newGame, setNewGame] = useState(emptyGame);

  const [errors, setErrors] = useState({
    name: [],
    image: [],
    description:[],
    platforms: [],
    releaseDate: [],
    rating: [],
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
      switch (property) {
      case "selectedGenre":
        setSelectedGenre(value)
        break;

        default:
          setNewGame({ ...newGame, [property]: value });
    }
    validate({ ...newGame, [property]: value }, errors, setErrors);
  };

  useEffect(() => {
    setNewGame({ ...newGame,
      genres: listGenres,
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listGenres]);

  const addGenre = (event) => {
    if(listGenres.length === 0){
      setListGenres(selectedGenre);
    } else {
      setListGenres(listGenres + ", "+ selectedGenre);
    }
    setSelectedGenre("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postGame(newGame);
    dispatch(addGame(newGame));
    setNewGame(emptyGame);
  };

  console.log("Errors:", errors)

  return (
    <>
    <div className={styles.header}>
      <Nav className={styles.nav} searchBarNavHidden='yes'/>
    </div>
      <div className={styles.newGameContainer}>
        <div className={styles.leftContainer}>
          <h2 className={styles.titleForm}>CREA TU JUEGO FAVORITO</h2>
          <div className={styles.leftContainerImg}>
            <img
              src={ gameImage }
              alt="game-desc"
            />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <form className={styles.form}>
            <div className={styles.inputLabel}>
                <label className={styles.label} htmlFor="name">
                    Nombre del Juego:
                </label>
                <input
                    type="text"
                    className={`${styles.input} ${errors.name.length !== 0
                                      ?styles.inputIncorrect
                                      :styles.inputCorrect}`}
                    name="name"
                    value={newGame.name}
                    onChange={handleChange}
                ></input>
                  {errors.name
                  ?errors.name.map((error) => {return <p className={styles.error}>{error}</p>})
                  :<></>}
                <label className={styles.label} htmlFor="image">
                    URL Imagen:
                </label>
                <input
                    type="text"
                    className={`${styles.input} ${errors.image.length !== 0
                                      ?styles.inputIncorrect
                                      :styles.inputCorrect}`}
                    name="image"
                    value={newGame.image}
                    onChange={handleChange}
                ></input>
                  {errors.image
                  ?errors.image.map((error) => {return <p className={styles.error}>{error}</p>})
                  :<></>}
            </div>
            {errors.description
                  ?errors.description.map((error) => {return <p className={styles.error}>{error}</p>})
                  :<></>}
            <div className={styles.inputLabelGroup}>
                  <label className={styles.label} htmlFor="description">
                  Describe el Juego
                  </label>
                  <textarea
                    rows="4"
                    cols="50"
                    className={`${styles.inputDescription}`}
                    name="description"
                    value={newGame.description}
                    onChange={handleChange}
                  ></textarea>
            </div>
            {errors.releaseDate
                  ?errors.releaseDate.map((error) => {return <p className={styles.error}>{error}</p>})
                  :<></>}
            <div className={styles.inputLabelGroup}>
                  <label className={styles.label} htmlFor="releaseDate">
                      Fecha de Lanzamiento:
                  </label>
                  <input
                    type="date"
                    className={`${styles.input} ${errors.releaseDate?.length !== 0
                              ?styles.inputIncorrect
                              :styles.inputCorrect}`}
                    name="releaseDate"
                    value={newGame.releaseDate}
                    onChange={handleChange}
                  ></input>
                  </div>
            <div className={styles.inputLabelGroup}>
                <label className={`${styles.label} ${styles.labelRating}`} htmlFor="rating">
                    Cual es tu calificación:
                </label>
                <input
                  type="text"
                  className={`${styles.input} ${styles.inputRating} ${errors.rating?.length !== 0
                    ?styles.inputIncorrect
                    :styles.inputCorrect}`}
                  name="rating"
                  value={newGame.rating}
                  onChange={handleChange}
                ></input>
                {errors.releaseDate
                      ?errors.releaseDate.map((error) => {return <p className={styles.error}>{error}</p>})
                      :<></>}
            </div>
            <div className={styles.inputLabelGroup}>
                  <label className={styles.label} htmlFor="selectedGenre">
                      A que generos corresponde el juego:
                  </label>
                  <input
                      list="genres"
                      placeholder="Selecciona.."
                      type="text"
                      className={ styles.input }
                      name="selectedGenre"
                      value={selectedGenre}
                      onChange={handleChange}
                      id="selectedGenre"
                  ></input>
                  <MdAddCircle className={styles.addButton} onClick={addGenre}/>
                  <datalist name="genres" id="genres">
                  <option defaultValue>Selecciona o escribe</option>
                  {
                    genres.map((temp, index) => {
                      return <option key={index} value={temp}>{temp}</option>
                    })
                  }
                  </datalist>
            </div>
            <h2 className={`${styles.label} ${styles.labelGenre}`}>GENEROS SELECCIONADOS: {listGenres}</h2>
            <button className={styles.buttonSubmit} onClick={handleSubmit}>
            <FaRegSave />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
