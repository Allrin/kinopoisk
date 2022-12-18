export const addSearchMovies = (movies) => ({
    type: 'ADD_SEARCH_MOVIES',
    payload: movies,
});

export const nameSearchMovie = (name) => ({
    type: 'NAME_SEARCH_MOVIE',
    payload: name,
});
