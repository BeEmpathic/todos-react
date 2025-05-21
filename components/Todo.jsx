import { useTodos } from "../contextProviders/todosProvider"

export function Todo({ todo }) {
    const { toggleTodo, deleteTodo } = useTodos()

    return (
        <div className="todo">
            <input id={todo.id}
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo.id)}
            />
            <label htmlFor={todo.id}>
                {todo.title}
            </label>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </div>
    )
}
