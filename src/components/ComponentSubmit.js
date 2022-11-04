import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, deleteTodo, editTodo} from '../actions/index'
import './Todo.css';
// import ComponentDelete from './ComponentDelete';
// import { useSelector } from 'react-redux';


function ComponentSubmit() {
   
    const [inputData, setinputData] = useState('');
    const list = useSelector((state)=> state.todoReducers.list);
    const dispatch = useDispatch();

    return (
       
        <div>
            <div className="addItems">
                <input type="text" 
                placeholder="Add Items" 
                value={inputData}
                onChange={(event)=>setinputData(event.target.value)}
                />

                <i className='fa fa-plus add-btn'onClick={()=>dispatch(addTodo(inputData),setinputData(''))}></i> 
                {/* <button onClick={()=>dispatch(addTodo(inputData),setinputData(''))}>submit</button> */}
                {/* <ComponentDelete inputData={inputData} /> */}
            </div>
            <div className="showItems">
                {
                    list.map((elem)=>{
                        return(
                            <div className="eachItem" key={elem.id}>
                                <h3>{elem.data}</h3>
                                <div className="todo-btn">
                                    <button onClick={()=>dispatch(editTodo(elem.id))}>edit</button>
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

export default ComponentSubmit;