import { useTodos } from "../contextProviders/todosProvider";
import { Todo } from "./Todo";

export function Todos() {
  const { todos } = useTodos();
  return (
    <div>
      {todos.length === 0 ? (
        <h3>You don't have any todos to do</h3>
      ) : (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
