
export const addTodo = (data) => {
    return {
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}


export const deleteTodo = (id) => {
    return {
        type:"DELETE_TODO",
        id:id
        
    }
}

export  const editTodo = (data) =>{
    return {
        type:"EDIT_TODO",
        payload:{
            id:data
        }
    }
}


