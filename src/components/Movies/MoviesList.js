import MoviesItem from './MovisItem';
import styles from '../styles/moviesList.module.css';

const MoviesList = ({ movies }) => {
    const items = movies.map((movi) => <MoviesItem key={movi.id} {...movi} />);

    return <div className={styles.cotainer}>{items}</div>;
};

export default MoviesList;
