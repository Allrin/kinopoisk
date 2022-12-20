import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listCartoon } from '../../services/movies';

import PaginationMovies from './PaginationMovies';
import { areYouHere } from '../../redux/movies/actions';

import loadBLack from '../images/loadBlack.gif';
import loadWhite from '../images/loadWhite.gif';

const CartoonPage = () => {
    const dispatch = useDispatch();

    const myTheme = useSelector((state) => state.theme.theme);
    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        dispatch(listCartoon());
        dispatch(areYouHere(false));
    }, []);

    const handleChange = (event, value) => {
        dispatch(listCartoon(value));
    };

    return (
        <>
            {!!movies ? (
                <PaginationMovies movies={movies} handleChange={handleChange} />
            ) : (
                <img
                    className="loading"
                    src={myTheme === 'dark' ? loadWhite : loadBLack}
                />
            )}
        </>
    );
};

export default CartoonPage;
