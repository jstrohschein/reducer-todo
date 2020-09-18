import React, { useState, useReducer } from 'react'
import { useForm } from 'react-hook-form'




const TodoForm = (props) => {

  
  const [newTask, setNewTask] = useState("")

  const { handleSubmit } = useForm();

  

  const handleChanges = e => {
    e.preventDefault()
    setNewTask(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    props.addNewTask(newTask)
    setNewTask('')
  }

  return(
      <form>

        <label htmlFor='todo'></label>

        <input
          type='text'
          id='todo'
          name='todo'
          placeholder='Add New Todo'
          value={newTask}
          onChange={handleChanges}
          />

        <button type='submit' onSubmit={handleSubmit(onSubmit)}>Add</button>

      </form>
  )


}


export default TodoForm