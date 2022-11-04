const initialData = {
    list : [],
    text:''
}

const todoReducers = (state=initialData, action) =>{
  switch(action.type){
    case "ADD_TODO":
        const{id, data} = action.payload;

        if(data){
            return{
                ...state, //initial data
                // list:action.payload
                list:[  // current data in the form of array
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }

        }

        break;
       
    case "DELETE_TODO":
        
        const list = state.list.filter((elem) => elem.id !== action.id)
        
    return{
        ...state,
        list
    }

    break;

    case "EDIT_TODO":
        
        const text = state.list.filter((elem) => elem.id !== action.id)

        return{
            ...state,
            text
        }

        // const text = state.list.map(li => {
        //     //console.log('id', action.id)
        //     if(li.id === action.id){
        //         return{
        //             ...state,
        //              text
        //         };
        //     }
        // });

        default: 
        return state;
    }
}

export default todoReducers;