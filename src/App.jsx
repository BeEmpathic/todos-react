import { useState, useContext } from 'react'
import './App.css'
import { Todos } from "../components/Todos.jsx"
import { TodosProvider, useTodos } from '../contextProviders/todosProvider.jsx'
import AddingTodo from '../components/AddingTodo.jsx'

// The error is cause you need to have the
//  variables definded in the contextProvider
//  so you have to do separate view for 
// adding todos


function App() {
  return (
    <>
      <h1>Todos</h1>
      <TodosProvider>
        <AddingTodo />

        <Todos />
      </TodosProvider>
    </>
  )
}

export default App
