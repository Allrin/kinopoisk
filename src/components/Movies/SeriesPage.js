import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listSeries } from '../../services/movies';

import { areYouHere } from '../../redux/movies/actions';

import PaginationMovies from './PaginationMovies';

import loadBLack from '../images/loadBlack.gif';
import loadWhite from '../images/loadWhite.gif';

const SeriesPage = () => {
    const dispatch = useDispatch();

    const myTheme = useSelector((state) => state.theme.theme);
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

export default SeriesPage;
