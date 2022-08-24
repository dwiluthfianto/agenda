const initialState = {
    todoList: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_TODOLIST":
            return {
                todoList: [...state.todoList, action.payload] 
            }
        case "UPDATE_TODOLIST":
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            isSuccess: !todo.isSuccess
                        }
                    }
                    return todo
                })
            }
        case 'DELETE_TODOLIST':
            return { 
                todoList: state.todoList.filter((todo) => todo.id !== action.payload.id)
            }
        default:
            return state
    }
}
 
export default todoReducer;