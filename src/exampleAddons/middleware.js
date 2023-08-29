import { client } from '../api/client';

export const loggerMiddleware = storeAPI => next => action => {
  const result = next(action);
  console.log('next state', storeAPI.getState());
  return result;
}

export const fetchTodosMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/fetchTodos') {
    client.get('fakeApi/todos').then(res => {
      storeAPI.dispatch({
        type: 'todos/todosLoaded',
        payload: res.todos
      });
    });
  }

  return next(action);
}
