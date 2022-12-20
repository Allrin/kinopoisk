import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useIsMibile from '../hooks/useIsMobile';
import { searchMovies } from '../../services/movies';
import { nameSearchMovie } from '../../redux/search/actions';
import { addFavoritesFilterMovies } from '../../redux/favorites/actions';
import styles from '../styles/search.module.css';

const Search = () => {
    const isMobile = useIsMibile();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const place = useSelector((state) => state.movies.place);

    const favoritesMovies = useSelector(
        (state) => state.favoritesMovies.favoritesMovies
    );

    const handleChangeSearchingMovies = (e) => {
        let inputValue = e.target.value;
        if (favoritesMovies && inputValue && place === true) {
            let coppyMoviesList = [...favoritesMovies];
            let filterMovies = coppyMoviesList.filter((movie) => {
                return movie.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase());
            });
            dispatch(addFavoritesFilterMovies(filterMovies));
        } else {
            dispatch(addFavoritesFilterMovies(null));
        }
    };

    const searchingMovies = (e) => {
        let inputValue = e.target.value;
        if (e.keyCode === 13 && inputValue && place === false) {
            dispatch(searchMovies(inputValue, 1));
            dispatch(nameSearchMovie(inputValue));
            navigate('/searchPage');
            e.target.value = '';
        }
    };

    return (
        <>
            <input
                className={styles.search}
                type="text"
                placeholder={isMobile ? 'Поиск' : 'Поиск фильма'}
                name="search"
                autoComplete="off"
                onChange={handleChangeSearchingMovies}
                onKeyDown={searchingMovies}
            />
        </>
    );
};

export default Search;
