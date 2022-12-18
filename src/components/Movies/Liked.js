import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { areYouHere } from '../../redux/movies/actions';

import MoviesList from './MoviesList';
import PaginationMovies from './PaginationMovies';

const Liked = () => {
    const dispatch = useDispatch();
    const favoritesMovies = useSelector(
        (state) => state.favoritesMovies.favoritesMovies
    );
    const filterFavoritesMovies = useSelector(
        (state) => state.favoritesMovies.filterFavoritesMovies
    );

    useEffect(() => {
        dispatch(areYouHere(true));
    }, []);

    return (
        <>
            {!!filterFavoritesMovies ? (
                <MoviesList movies={filterFavoritesMovies} />
            ) : (
                !!favoritesMovies[0]? <MoviesList movies={favoritesMovies} /> : <p>Нет фильмов</p>
            )}
        </>
    );
};

export default Liked;
