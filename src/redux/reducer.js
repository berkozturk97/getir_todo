/* eslint-disable no-fallthrough */
import { act } from 'react-dom/test-utils';
import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    FETCH_TODO_SUCCESS,
    SET_IS_LOADING
} from './actions';

const initialState = {
    todo: [],
    inProgress: [],
    done: [],
    isLoading: true,
};

export let reducer = (state = initialState, action) => {
    let newTodos;
    switch (action.type) {
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                todo: action.payload[0],
                inProgress: action.payload[1],
                isLoading: false,
                done: action.payload[2]
            }
            case ADD_TODO:
                //state.todo = [...state];
                state.todo.push(action.payload);
                return state;

                // newTodos = [...state];
                // newTodos.push(action.payload);
                // return newTodos;

            case UPDATE_TODO:
               return {
                   ...state,
                   todo: action.payload[0],
                   inProgress: action.payload[1],
                   isLoading: false,
                   done: action.payload[2]
               }
                case DELETE_TODO:
                    newTodos = [...state];
                    newTodos = newTodos.filter(todo => todo.id !== action.payload);
                    return newTodos;
                case SET_IS_LOADING:
                    return {
                        ...state,
                        isLoading: action.payload,
                    }  
                default:
                    return state

    }
}