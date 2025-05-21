import React, { useState } from "react";
import { useTodos } from "../contextProviders/todosProvider";

export default function AddingTodo() {
  const [todoTitle, setTodoTitle] = useState("");
  const { addTodo } = useTodos();

  function handleAddTodo() {
    if (todoTitle.trim() === "") return;
    addTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <div>
      <input
        type="text"
        required
        data-todos-input
        value={todoTitle}
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}
