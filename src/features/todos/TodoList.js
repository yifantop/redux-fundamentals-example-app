import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { selectAllIds } from './todosSlice';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const todoIds = useSelector(selectAllIds, shallowEqual);

  const renderedListItems = todoIds.map(todoId => {
    return <TodoListItem key={todoId} todoId={todoId} />
  });

  return <ul className="todo-list">{renderedListItems}</ul>
}