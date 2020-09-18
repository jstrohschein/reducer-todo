import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo'
import {todoReducer, ADD_TODO, TOGGLE_COMPLETED, initialTodoState} from './reducers/todoReducer'

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialTodoState)

  const addNewTask = newTask => {
    
    dispatch({ type: ADD_TODO, payload: newTask})

  }






  return (
    <div className="App">
      <TodoForm addNewTask={addNewTask}/>
      <Todo tasks={state}/>
    </div>
  );
}

export default App;
