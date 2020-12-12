
import axios from 'axios';

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAIL = "FETCH_TODO_FAIL";
export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }

}


export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        payload: todo,
    }

}


export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId,
    }
}

export function fetchTodoSuccess(todo) {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: todo,
    }

}
export function fetchTodoFail(error) {
    return {
        type: FETCH_TODO_FAIL,
        payload: error,
    }

}

export function fetchTodoRequest(todo) {
    return {
        type: FETCH_TODO_REQUEST,
        payload: todo,
    }

}

export function getTodo() {
    return (dispatch) => {
        dispatch(fetchTodoRequest);
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            let todo = response.data.slice(0,10);

            dispatch(fetchTodoSuccess(todo));
        })
        .catch(error => {
            const errorMsg = error.message;
        })
    }

}