import { useState } from 'react'

import "./App.css";

import Todo from "./components/todo"
import TodoForm from './components/todoForm';
import Search from './components/search';
import Filter from './components/filter';

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

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, SetSort] = useState("Asc");

  const addTodo = (text, category) => { 
    const newTodos = [...todos,{
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search search={search} setSearch={setSearch} />
    <Filter filter = {filter} setFilter={setFilter} />
    <div className="TodoList">
      {todos.filter((Todo) => filter === "All"
        ? true 
        : filter === "Completed" 
        ? Todo.isCompleted 
        : !Todo.isCompleted)
      .filter((Todo) => Todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      .map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>;
}

export default App
