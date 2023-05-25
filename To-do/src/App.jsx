import { useState } from 'react'

import "./App.css";

import Todo from "./components/todo"
import TodoForm from './components/todoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Work",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir malhar",
      category: "Personal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Estudar react",
      category: "Stydies",
      isCompleted: false
    }
  ])

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="TodoList">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
    <TodoForm />
  </div>;
}

export default App
