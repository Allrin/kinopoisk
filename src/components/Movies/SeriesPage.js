import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listSeries } from '../../services/movies';

import { areYouHere } from '../../redux/movies/actions';

import PaginationMovies from './PaginationMovies';

const SeriesPage = () => {
    const dispatch = useDispatch();

    const movies = useSelector((state) => state.movies.movies);

    useEffect(() => {
        dispatch(listSeries());
        dispatch(areYouHere(false));
    }, []);

    const handleChange = (event, value) => {
        dispatch(listSeries(value));
    };

    return (
        <>
            {movies && (
                <PaginationMovies movies={movies} handleChange={handleChange} />
            )}
        </>
    );
};

export default SeriesPage;
