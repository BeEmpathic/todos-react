import { useTodos } from "../contextProviders/todosProvider";
import type { Todo as TodoType } from "../contextProviders/todosProvider";

type Props = {
  todo: TodoType;
};

export function Todo({ todo }: Props) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="todo">
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleTodo(todo.id)}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}
