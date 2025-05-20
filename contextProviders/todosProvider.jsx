import { useContext, useState, createContext, useEffect } from 'react'
import { v4 as uuid } from "uuid"
const TodosContext = createContext()


export function useTodos() {
    return useContext(TodosContext)
}

export function TodosProvider({ children }) {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos")
        return storedTodos ? JSON.parse(storedTodos) : []
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    function addTodo(title) {
        const id = uuid()
        const checked = false
        setTodos(prevTodos => [
            ...prevTodos,
            { id, title, checked }
        ]
        )
    }

    function toggleTodo(id) {
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        )
    }
    function deleteTodo(id) {

    }

    return (
        <TodosContext.Provider value={{ todos, addTodo, toggleTodo }}>
            {children}
        </TodosContext.Provider>
    )

}