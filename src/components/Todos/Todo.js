import todoStyle from './Todo.module.css'
import { FcTodoList, FcCheckmark } from "react-icons/fc";
import { RxTrash } from "react-icons/rx";



function Todo({ todo, deleteTodo, toggleTodo, refreshTodos }) {

  const deleteTodoEvent = (e) => {
    deleteTodo(todo.id)
  }

  return <div className={`${todoStyle.appTodo} ${todo.isCompleted ? todoStyle.completedTodo : ''}`}>
    <FcTodoList className={todoStyle.iconTodo}/>
    <h3>{todo.text}</h3>
    <FcCheckmark className={todoStyle.iconDone} onClick={() => toggleTodo(todo.id)} />
    <RxTrash className={todoStyle.iconDel} onClick={deleteTodoEvent}/>

    </div>
}

export default Todo
