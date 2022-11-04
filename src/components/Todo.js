import React from 'react'
import ComponentSubmit from './ComponentSubmit';
// import ComponentDelete from './ComponentDelete';

import './Todo.css'

function Todo() {

   
    return (
      <div>
        <div className="Todo">
        <div className="main-div">
          <div className="child-div">
            <figure>
              <figcaption>ADD TODO LIST</figcaption>
            </figure>
            
            <ComponentSubmit />
            
          </div>
        </div>
      </div>
      </div>
    );
}

export default Todo;