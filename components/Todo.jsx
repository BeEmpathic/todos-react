import { useTodos } from "../contextProviders/todosProvider"

export function Todo({ todo }) {
    const { toggleTodo } = useTodos()

    return (
        <div>
            <input id={todo.id}
                type="checkbox"
                checked={todo.checked}
                onChange={() => toggleTodo(todo.id)}
            />
            <label htmlFor={todo.id}>
                {todo.title}
            </label>
        </div>
    )
}
