import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODO_SUCCESS } from './actions';
// import { todos } from './states';

const initialState = {
    todos: [],
    isLoading: true,
};

export let reducer = (state = initialState, action) => {
    let newTodos;
    switch (action.type) {
        case FETCH_TODO_SUCCESS:
            return {...state, todos: action.payload, isLoading: false}
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id === action.payload.id) break;

            }
            if (index !== -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id !== action.payload);
            return newTodos;
            default:
                return state

    }
}