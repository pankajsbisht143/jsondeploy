const initialState = {
    user: null,
    isLoggedIn: false,
};



const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNUP_USER':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                user: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export {userReducer};
