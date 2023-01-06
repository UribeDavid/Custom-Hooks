import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos?.length ? todos : []));
    }, [ todos ])

    const handleNewTodo = todo => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        };
        dispatch( action );
    }

    const handleUpdateTodo = id => {
        const action = {
            type: '[TODO] Update Todo',
            payload: id
        };
        dispatch( action );
    }

    const handleRemoveTodo = id => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        };
        dispatch( action );
    }

    return {
        todos,
        todoAmount: todos.length,
        pendingTodosAmount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleUpdateTodo,
        handleRemoveTodo
    }
}