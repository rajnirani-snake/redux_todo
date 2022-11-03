import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {editTodo, deleteTodo} from '../actions/index';
import EditTodoComponent from './EditTodoComponent';

import './Todo.css'

function ComponentDelete({inputData}) {

    // const [inputData, setinputData] = useState('');
    const list = useSelector((state)=> state.todoReducers.list);
    
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
                                    <button onClick={()=>dispatch(deleteTodo(elem.id))} >delete</button>
                                    <EditTodoComponent inputData={inputData} elemId={elem.id}/>
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