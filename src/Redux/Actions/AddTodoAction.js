const AddTodoAction = (todo) => {
    return {
        type: "ADD_TODO",
        payload: todo
    }

}

export default AddTodoAction