import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import { FaReact } from "react-icons/fa";
import TodosActions from './components/Todos/TodosActions';

function App() {

  const [todos, setTodos] = useState([]) // массив строк

  const addTodoHandler = (text) => { // используется для добавления задачи в массив задач
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4()
    }
    setTodos([...todos, newTodo].sort((a,b) => a.isCompleted - b.isCompleted)) // сортировка, выполненные задачи всегда в конце
  }

  const toggleTodo = (id) => { // функция тогл для изменения свойства объекта выполнения задачи
    setTodos(todos.map((todo) => {
    return id === todo.id ? {...todo, isCompleted: !todo.isCompleted} : {...todo} 
  }
  ).sort((a,b) => a.isCompleted - b.isCompleted)) // сортировка, выполненные задачи всегда в конце
  }

  const deleteTodo = (index) => { // функция удаление задачи
    setTodos(todos.filter((todo) => todo.id !== index))
  }

  const refreshTodos = () => { //функция для  отчистки листа задач
    setTodos([])
  }

  const delDoneTodos = () => { // функция для удаления всех выполненных задач
    setTodos(todos.filter((todo) => todo.isCompleted !== true))
  }

  return (
    <div className='App'>
      <h1  className='app-title'>Todo <FaReact/> App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosActions refreshTodos={refreshTodos} delDoneTodos={delDoneTodos}/>
      <TodoList toggleTodo={toggleTodo}  todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
