import React, { useState, useReducer } from 'react';
import './App.css';




const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD-TODO':
      return {todos: [...state.todos, { item: action.payload, completed: false, id: new Date()}] };
    case 'TOGGLE-TODO':
      return {
        todos: state.todos.map((task, index) => index === action.payload ? {...task, completed: !task.completed} : task)
      }
    case 'CLEAR-COMPLETED':
      return {
        todos: state.todos.filter(t => !t.completed)
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
        dispatch({ type: 'ADD-TODO', payload: text })
        setText('');
      }}>

        <input value={text} onChange={e => setText(e.target.value)} />
      </form>
    
      {todos.map((task, index) => (
        <div 
        key={task.id} 
        onClick={() => dispatch({type: 'TOGGLE-TODO', payload: index})}
        style={{
          textDecoration: task.completed ? 'line-through' : ''
        }}
        > {task.item} 
        </div>
        
      ))}

      <button onClick={()=>dispatch({type: 'CLEAR-COMPLETED'})}>Clear List</button>  



{/*   <pre>{JSON.stringify(todos, null, 2)}</pre>*/}    

</div>
  );
}

export default App;
