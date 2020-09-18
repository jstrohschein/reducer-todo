export const initialTodoState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 182930495
}]

export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const ADD_TODO = "ADD_TODO"

export const todoReducer = (state, action) => {


  switch(action.type){


    case TOGGLE_COMPLETED: {
      return {
        ...state,
        completed: !state.completed
      }
    }

    case ADD_TODO: {
      return {
        ...state,
        item: action.payload,
        completed: false,
        id: new Date()
      }
    }

    default:
      return state;
  }

}  