import React from "react";
import { selectTodoById } from '../todos/todosSlice';
import { useDispatch, useSelector } from "react-redux";

export const TodoListItem = ({ todoId }) => {
  const todo = useSelector(state => selectTodoById(state, todoId));
  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch({
      type: 'todos/todoToggled',
      payload: todo.id,
    });
  };

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleCompletedChanged} />
      {todo.text}
    </li>
  )
}