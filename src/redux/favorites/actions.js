export const addFavoritesMovies = (movie) => ({
    type: 'ADD_FAVORITES_MOVIES',
    payload: movie,
});

export const addFavoritesFilterMovies = (movies) => ({
    type: 'ADD_FAVORITES_FILTER_MOVIES',
    payload: movies,
});

export const deleteFavoritesMovies = (movie) => ({
    type: 'DELETE_FAVORITES_MOVIES',
    payload: movie,
});
