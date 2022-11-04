import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {editTodo, deleteTodo} from '../actions/index';
// import EditTodoComponent from './EditTodoComponent';

import './Todo.css'

function ComponentDelete({inputData}) {

    //  const [inputData, setinputData] = useState('');
    const list = useSelector((state)=> state.todoReducers.list);
    
    const onUpdateTodo = (elemid, data) => {
        console.log('dsdafas',elemid, data);
    }
    
    const dispatch = useDispatch();
    return (
        <div>
            <div className="showItems">
                {
                    list.map((elem)=>{
                        return(
                            <div className="eachItem" key={elem.id}>
                                <h3>{elem.data}</h3>
                                <div className="todo-btn">
                                    <button onClick={()=>dispatch(editTodo(elem.id))} onClick={()=>onUpdateTodo(elem.id)}>edit</button>
                                    {/* <EditTodoComponent inputData={inputData} elemid={elem.id}/> */}
                                    <button onClick={()=>dispatch(deleteTodo(elem.id))} >delete</button>
                                </div>
                            </div>
                        );
                    })
                }
             </div> 
              
             
        </div>
       
    );
}

export default ComponentDelete;