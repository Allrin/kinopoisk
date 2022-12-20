const initialStore = {
    id: null,
    email: null,
    token: null,
};

const usersReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                token: action.payload.token,
            };

        case 'REMOVE_USER':
            return { ...state, id: null, email: null, token: null };

        default:
            return state;
    }
};

export default usersReducer;
