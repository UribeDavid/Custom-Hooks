export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        case '[TODO] Update Todo':
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        case '[TODO] Remove Todo':
            const id = action.payload;
            return initialState.filter(todo => todo.id !== id);
        default:
            return initialState;
    }
}