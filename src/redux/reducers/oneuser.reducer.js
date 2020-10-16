const oneUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ONE_USER':
            return action.payload;
        default:
            return state;
    }
};

export default oneUserReducer;