import React from 'react'
import Checkbox from './Checkbox'
import './style.css'
import del_icon from '../assets/delete.png'

function TodoItem({index, completed, text, handleToggleComplete, handleDeleteTodo}) {
  return (
    <li>
        <Checkbox label={text}
          index={index}
          compeleted={completed}
          handleToggleComplete={handleToggleComplete}
        />
        <div className='cursor' onClick={() => handleDeleteTodo(index)}>
          <img src={del_icon} alt="" width='20px'/>
        </div>
    </li>
  )
}

export default TodoItem