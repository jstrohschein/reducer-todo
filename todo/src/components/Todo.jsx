import React, { useState, useReducer } from 'react';
import { initialTodoState, todoReducer } from '../reducers/todoReducer'


const Todo = (props) => {


  console.log('Todo Props: ',props)


  return (
    <div>
      {props.tasks.map(task => (
        <li key={task.id}>
          <h2>{task.item}</h2>
        </li>
      ))}
    </div>
  )




}

export default Todo