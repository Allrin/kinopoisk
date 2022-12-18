const initialState = {
    series: null,
};

const seriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARTOON':
            return { ...state, series: action.payload };

        default:
            return state;
    }
};

export default seriesReducer;
