import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useIsMibile from '../hocks/useIsMobile';
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

    const searchingMovies = (e) => {
        let inputValue = e.target.value;
        if (e.keyCode === 13 && inputValue !== '' && place === false) {
            dispatch(searchMovies(inputValue, 1));
            dispatch(nameSearchMovie(inputValue));
            navigate('/searchPage');
            e.target.value = '';
        } else {
            if (
                !!favoritesMovies[0] === true &&
                inputValue !== '' &&
                place === true
            ) {
                let coppyMoviesList = [...favoritesMovies];
                if (inputValue) {
                    let filterMovies = coppyMoviesList.filter((movie) => {
                        return movie.name
                            .toLowerCase()
                            .includes(inputValue.toLowerCase());
                    });
                    dispatch(addFavoritesFilterMovies(filterMovies));
                } else {
                    dispatch(addFavoritesFilterMovies(null));
                }
            }
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
                onKeyDown={searchingMovies}
            />
        </>
    );
};

export default Search;
