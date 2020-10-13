const palProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_PAL_PROFILE':
            return action.payload;
        default:
            return state;
    }
};

export default palProfileReducer;