const lettersToReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LETTERS_TO':
            return action.payload;
        default:
            return state;
    }
};



// user will be on the redux state at:
// state.user
export default lettersToReducer;