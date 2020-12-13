import {
    ADD_TODO,
    UPDATE_TODO,
    DELETE_TODO,
    FETCH_TODO_SUCCESS,
    SET_IS_LOADING,
    IS_VISIBLE_MODAL,
    SELECT_OBJECT
} from './actions';

const initialState = {
    todo: [],
    inProgress: [],
    done: [],
    isLoading: true,
    isVisibleModal: false,
    selectedObject: {},
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
                state.todo.push(action.payload);
                return state;

            case UPDATE_TODO:
                return {
                    ...state,
                    todo: action.payload[0],
                        inProgress: action.payload[1],
                        isLoading: false,
                        done: action.payload[2]
                }

            case IS_VISIBLE_MODAL:
                return {
                    ...state,
                    isVisibleModal: action.payload
                }

            case SELECT_OBJECT:
                return {
                    ...state,
                    selectedObject: action.payload
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