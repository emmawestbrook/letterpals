const pendingPalsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PENDING_PALS':
            return action.payload;
        default:
            return state;
    }
};



// user will be on the redux state at:
// state.user
export default pendingPalsReducer;
