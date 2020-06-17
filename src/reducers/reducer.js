const initialState = {
    decks: []
};

function decksReducer(state = initialState, action){
    switch (action.type){
        case 'Create':
        return [
            ...state, 
            {id: Date.now() }
        ];
      default:
        return state;
    }
    }

export default decksReducer;