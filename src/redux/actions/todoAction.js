const SetTodolist = (data) => {
    return (dispatch) => {
        dispatch({type: "CREATE_TODOLIST", payload: data})
    }
}
const UpdateTodolist = (data) => {
    return (dispatch) => {
        dispatch({type: "UPDATE_TODOLIST", payload: data})
    }
}
const DeleteTodolist = (data) => {
    return (dispatch) => {
        dispatch({type: "DELETE_TODOLIST", payload: data})
    }
}

export {SetTodolist, DeleteTodolist, UpdateTodolist}