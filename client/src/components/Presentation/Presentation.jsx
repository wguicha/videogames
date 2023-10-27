import styles from './Presentation.module.css'
import { Link } from 'react-router-dom';

export default function Presentation() {
    return (
        <div className={styles.container}>
            <div className={styles.divButton}>
                <Link to="/home">
                    <button className={styles.button}>Search Your Game</button>
                </Link>
            </div>
            <div className={`${styles.backwrap} ${styles.gradient}`}>
                <div className={styles.backShapes}>
                    <span className={`${styles.floating} ${styles.circle} ${styles.circle1}`}></span>
                    <span className={`${styles.floating} ${styles.triangle} ${styles.triangle1}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross1}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square1}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square2}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square3}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross2}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross3}`}></span>
                    <span className={`${styles.floating} ${styles.circle} ${styles.circle2}`}></span>
                    <span className={`${styles.floating} ${styles.circle} ${styles.circle3}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross4}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross5}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross6}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross7}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square4}`}></span>
                    <span className={`${styles.floating} ${styles.circle} ${styles.circle4}`}></span>
                    <span className={`${styles.floating} ${styles.triangle} ${styles.triangle2}`}></span>
                    <span className={`${styles.floating} ${styles.triangle} ${styles.triangle3}`}></span>
                    <span className={`${styles.floating} ${styles.triangle} ${styles.triangle4}`}></span>
                    <span className={`${styles.floating} ${styles.triangle} ${styles.triangle5}`}></span>
                    <span className={`${styles.floating} ${styles.triangle} ${styles.triangle6}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross8}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross9}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross10}`}></span>
                    <span className={`${styles.floating} ${styles.cross} ${styles.cross11}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square5}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square6}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square7}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square8}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square9}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square10}`}></span>
                    <span className={`${styles.floating} ${styles.square} ${styles.square11}`}></span>
                </div>
            </div>
        </div>
    );
}
