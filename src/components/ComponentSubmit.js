import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../actions/index'
import './Todo.css';
import ComponentDelete from './ComponentDelete';
// import { useSelector } from 'react-redux';


function ComponentSubmit() {
    const [inputData, setinputData] = useState('');
    // const list = useSelector((state)=> state.todoReducers.list);
    
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
                <ComponentDelete inputData={inputData} />
             </div>
        </div>    
     
      
    );
}

export default ComponentSubmit;