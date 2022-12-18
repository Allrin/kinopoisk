import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listCartoon } from '../../services/movies';

import PaginationMovies from './PaginationMovies';
import { areYouHere } from '../../redux/movies/actions';

const CartoonPage = () => {
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        dispatch(listCartoon());
        dispatch(areYouHere(false));
    }, []);

    const handleChange = (event, value) => {
        dispatch(listCartoon(value));
    };

    return (
        <main>
            {movies && (
                <PaginationMovies movies={movies} handleChange={handleChange} />
            )}
        </main>
    );
};

export default CartoonPage;
