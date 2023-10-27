import styles from "./Detail.module.css";
import axios from "axios";
import Nav from "../Nav/Nav";
import myPhoto404 from '../../assets/404NotFoundimg.png'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parseHTML from 'html-react-parser';

function Detail() {
  const { id } = useParams();
  const [game, setGame] = useState({});

  useEffect(() => {
      axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
          if (data.name) {
            setGame({...data, description: parseHTML(data.description)});
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    return setGame({});
  }, [id]);

  return (
    <div className={styles.divCard} key={id}>
      <Nav searchBarNavHidden='yes'/>
      <div className={styles.divImg}>
        <img src={game.background_image? game.background_image: myPhoto404} alt={game.name + "-image"} />
        <img src={game.background_image_additional? game.background_image_additional: myPhoto404} alt={game.name + "-image-2"} />
        <div className={styles.divContent}>
          <h1 className={styles.h2Name}>{game.name}</h1>
          <div className={styles.divInfo}>
            <h5>{game.description}</h5>
            <h3 className={styles.h3Spec}>
              <span>Rating:</span>&nbsp;&nbsp;&nbsp;{game.rating}
            </h3>
            <h3 className={styles.h3Spec}>
              <span>Release date:</span>&nbsp;&nbsp;&nbsp;{game.released}
            </h3>
            <h3 className={styles.h3Spec}>
              <span>Platforms:</span>&nbsp;&nbsp;&nbsp;{game.platforms}
            </h3>
            <h3 className={styles.h3Spec}>
              <span>Genres:</span>&nbsp;&nbsp;&nbsp;{game.genres}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
