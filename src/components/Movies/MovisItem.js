import { Link } from 'react-router-dom';
import styles from '../styles/moviesItem.module.css';

const MoviesItem = ({ id, poster, name, year, alternativeName }) => {
    return (
        <div className={styles.containerItem}>
            <Link className={styles.link} to={`/movies/${id}`}>
                <img className={styles.img} src={poster.url} title={name} />
            </Link>
            <div className={styles.cards}>
                {!!name ? (
                    <h3 className={styles.title}>
                        {name} {!!year && <span>({year})</span>}
                    </h3>
                ) : (
                    <h3 className={styles.title}>
                        {alternativeName} {!!year && <span>({year})</span>}
                    </h3>
                )}
            </div>
        </div>
    );
};

export default MoviesItem;
