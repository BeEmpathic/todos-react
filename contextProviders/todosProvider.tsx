import {
  useContext,
  useState,
  createContext,
  useEffect,
  ReactNode,
} from "react";
import { v4 as uuid } from "uuid";

export type Todo = {
  id: string;
  title: string;
  checked: boolean;
};

type TodosContextType = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export function useTodos(): TodosContextType {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosProvider");
  }
  return context;
}

type TodosProviderProps = {
  children: ReactNode;
};

export function TodosProvider({ children }: TodosProviderProps) {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title: string) {
    const id = uuid();
    const checked = false;
    setTodos((prevTodos) => [...prevTodos, { id, title, checked }]);
  }

  function toggleTodo(id: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  function deleteTodo(id: string) {
    setTodos((prevTodos) => (prevTodos = prevTodos.filter((t) => t.id !== id)));
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
