import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { saveNewTodo } from "../todos/todosSlice";

export const Header = () => {
  const [text, setText]  = useState('');
  const dispatch = useDispatch();

  const handleChange = e => setText(e.target.value);
  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim();

    if (e.key === 'Enter' && trimmedText) {
      dispatch(saveNewTodo(trimmedText));
      setText('');
    }
  }

  return (
    <input
      type="text"
      placeholder="what needs to be done"
      autoFocus={true}
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}