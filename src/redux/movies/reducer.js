const initialState = {
    movies: null,
    oneMovie: null,
    premieresMovies: null,
    place: false,
};

const moviesReducer = (state = initialState, action) => {
    let movies;
    switch (action.type) {
        case 'ADD_MOVIES':
            return { ...state, movies: action.payload };

        case 'ADD_DATA_MOVIE':
            return { ...state, oneMovie: action.payload };

        case 'ARE_YOU_HERE':
            return { ...state, place: action.payload };

        case 'PREMIERES_MOVIES':
            return { ...state, premieresMovies: action.payload };

        default:
            return state;
    }
};

export default moviesReducer;
