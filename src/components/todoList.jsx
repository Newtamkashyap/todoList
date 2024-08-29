import React from 'react';
import './todo.css';

function TodoList(props) {
  return (
    <div>
       
        <li className='list'>
            {props.item}
            <span className='bi bi-archive-fill icons'
            
            onClick={e=>{
                props.deleteItem(props.index)
            }}>
            </span>
        </li>
        
    </div>
  )
}

export default TodoList