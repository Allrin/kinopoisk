export const addMovies = (movies) => ({ type: 'ADD_MOVIES', payload: movies });
export const addDataMovie = (oneMovie) => ({
    type: 'ADD_DATA_MOVIE',
    payload: oneMovie,
});
export const areYouHere= (place) => ({ type: 'ARE_YOU_HERE', payload: place });

export const premieresMovies = (movies) => ({
    type: 'PREMIERES_MOVIES',
    payload: movies,
});
