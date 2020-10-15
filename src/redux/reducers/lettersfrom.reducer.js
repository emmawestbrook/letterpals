const lettersFromReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LETTERS_FROM':
            return action.payload;
        default:
            return state;
    }
};

export default lettersFromReducer;