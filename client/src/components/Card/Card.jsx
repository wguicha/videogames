import styles from './Kard.module.css'
import { Link } from 'react-router-dom';
import myPhoto404 from '../../assets/404NotFoundimg.png'
import { generateStars } from "../../utils/generateStars";

function Card(props) {
   const { id, name, image, rating } = props.game;

   const genres = props.game.genres?.map(genre => genre.name).join(', ');

   const starsHtml = generateStars(rating, id);

   return (
         <div className={styles.divCardContainer} key={id}>
            <Link to={`/detail/${id}`} >
            <div className={styles.divCard}>
               <div className={styles.divImg}>
                  <img src={image? image: myPhoto404} alt={name + '-image'} />
                  <div className={styles.divContent}>
                     <h1 className={styles.h2Name}>{ name }</h1>
                  <div className={styles.divInfo}>
                  <h3 className={styles.h3Spec}>
                     <span>Rating:</span>&nbsp;&nbsp;&nbsp;
                     <span className={styles.iconStar}>{starsHtml}</span>
                     &nbsp;&nbsp;&nbsp;
                     {rating}
                  </h3>
                     <h3 className={styles.h3Spec}><span>Genres:</span>&nbsp;&nbsp;&nbsp;{genres}</h3>
                  </div>
               </div>
               </div>
            </div>
            </Link>
         </div>

   );
}

export default Card;