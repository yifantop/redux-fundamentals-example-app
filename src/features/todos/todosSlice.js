import { client } from "../../api/client";

const initialState = [];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded':
      return [
        ...state,
        action.payload
      ];
    case 'todos/todoToggled':
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      });
    case 'todos/todosLoaded':
      return action.payload;
    default:
      return state;
  }
}

export async function fetchTodos(dispatch, getState) {
  const res = await client.get('/fakeApi/todos');
  const stateBefore = getState();
  console.log('Todos before dispatch: ', stateBefore.todos.length);
  
  dispatch({
    type: 'todos/todosLoaded',
    payload: res.todos
  });

  const stateAfter = getState();
  console.log('Todos after dispatch: ', stateAfter.todos.length);
}

export function saveNewTodo(text) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const todo = { text };
    const res = await client.post('/fakeApi/todos', { todo });
    dispatch({
      type: 'todos/todoAdded',
      payload: res.todo
    })
  }
}

export const selectAllIds = state => state.todos.map(todo => todo.id);
export const selectTodoById = (state, todoId) => state.todos.find(todo => todo.id === todoId)
export const selectTotalCompletedTodos = state => {
  return state.todos.filter(todo => todo.completed);
}