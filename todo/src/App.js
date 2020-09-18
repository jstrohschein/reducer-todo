import React, { useState, useReducer } from 'react';
import './App.css';




const reducer = (state, action) => {
  switch (action.type) {
    case 'add-todo':
      return {todos: [...state.todos, { item: action.payload, completed: false, id: new Date()}] };
    case 'toggle-todo':
      return {
        todos: state.todos.map((task, index) => index === action.payload ? {...task, completed: !task.completed} : task)
      }
    default:
      return state;
  }
}

function App() {

  const [{ todos }, dispatch] = useReducer(reducer, { todos: [] })
  const [text, setText] = useState()


  return (
    <div className="App">
      <form onSubmit = {e => {
        e.preventDefault()
        dispatch({ type: 'add-todo', payload: text })
        setText('');
      }}>

        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
    
      {todos.map((task, index) => (
        <div 
        key={task.id} 
        onClick={() => dispatch({type: 'toggle-todo', payload: index})}
        style={{
          textDecoration: task.completed ? 'line-through' : ''
        }}
        > {task.item} 
        </div>
      ))}


{/*   <pre>{JSON.stringify(todos, null, 2)}</pre>*/}    

</div>
  );
}

export default App;
