import axios from 'axios';

export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAIL = "FETCH_TODO_FAIL";
export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const IS_VISIBLE_MODAL = "IS_VISIBLE_MODAL";
export const SELECT_OBJECT = "SELECT_OBJECT";


export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function updateTodo(todo,inProgress,done) {
    return {
        type: UPDATE_TODO,
        payload: [todo,inProgress,done],
    }
}

export function deleteTodo(todoId) {
    return {
        type: DELETE_TODO,
        payload: todoId,
    }
}

export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        payload: isLoading
    }
}

export function fetchTodoSuccess(todo,inProgress, done) {
    return {
        type: FETCH_TODO_SUCCESS,
        payload: [todo, inProgress, done]
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

export function visibleModal(isVisibleModal) {
    return {
        type: IS_VISIBLE_MODAL,
        payload: isVisibleModal,
    }
}

export function selectObject(selectedObject) {
    return {
        type: SELECT_OBJECT,
        payload: selectedObject,
    }
}

export function addNewTodo({body = null}) {
    
    return (dispatch) => {
        dispatch(setIsLoading(true));
        axios.post('https://filterio.herokuapp.com/todo/addTodo', body)
            .then(response => {
                console.log(response.data);
                dispatch(addTodo(response.data));
                dispatch(setIsLoading(false));
            })
            .catch(error => {
                const errorMsg = error.message;
            })
    }

}

export function getTodo() {
    return (dispatch) => {
        dispatch(fetchTodoRequest);
        axios.get('https://filterio.herokuapp.com/todo/getTodos')
            .then(response => {
                const todo = [];
                const inProgress = [];
                const done = [];
                response.data.forEach((item) => {
                    console.log(item)
                    if (item.status === 2) {
                        done.push(item);
                    }else if (item.status === 1){
                        inProgress.push(item);
                    } else {
                        todo.push(item);
                    }
                })
                dispatch(fetchTodoSuccess(todo, inProgress, done));
            })
            .catch(error => {
                const errorMsg = error.message;
            })
    }

}

export function updateTodos({body = null}) {
    return (dispatch) => {
        dispatch(fetchTodoRequest);   
        axios.put('https://filterio.herokuapp.com/todo/updateTodos', body)
            .then(response => {
                
            })
            .catch(error => {
                const errorMsg = error.message;
            })
    }

}