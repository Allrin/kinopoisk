const initialState = {
    searchMovies: null,
    nameSearch: null,
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_SEARCH_MOVIES':
            return { ...state, searchMovies: action.payload };
        case 'NAME_SEARCH_MOVIE':
            return { ...state, nameSearch: action.payload };
        default:
            return state;
    }
};

export default searchReducer;
