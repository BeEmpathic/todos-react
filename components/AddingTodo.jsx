import React, { useState } from 'react'
import { useTodos } from '../contextProviders/todosProvider'

export default function AddingTodo() {
    const [todoTitle, setTodoTitle] = useState("")
    const { addTodo } = useTodos()

    return (
        <div>
            <input type="text" required data-todos-input value={todoTitle} onChange={(e) => {
                setTodoTitle(e.target.value)
            }} />
            <button onClick={() => {
                if (todoTitle.trim() === "") return

                addTodo(todoTitle)
            }}>Add Todo</button>
        </div>
    )
}
