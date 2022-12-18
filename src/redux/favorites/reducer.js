const initialState = {
    favoritesMovies: JSON.parse(localStorage.getItem('favoritesMovies')) ?? [],
    filterFavoritesMovies: null,
};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITES_MOVIES':
            state.favoritesMovies.push(action.payload);
            localStorage.setItem(
                'favoritesMovies',
                JSON.stringify(state.favoritesMovies)
            );
            return { ...state };

        case 'DELETE_FAVORITES_MOVIES':
            let indexElement = state.favoritesMovies.findIndex(
                (movie) => movie.id === action.payload.id
            );
            state.favoritesMovies.splice(indexElement, 1);
            localStorage.setItem(
                'favoritesMovies',
                JSON.stringify(state.favoritesMovies)
            );
            return { ...state };

        case 'ADD_FAVORITES_FILTER_MOVIES':
            return { ...state, filterFavoritesMovies: action.payload};

        default:
            return state;
    }
};

export default favoritesReducer;
