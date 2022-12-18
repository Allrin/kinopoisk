const initialState = {
    cartoon: null,
};

const cartoonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CARTOON':
            return { ...state, cartoon: action.payload };

        default:
            return state;
    }
};

export default cartoonReducer;
