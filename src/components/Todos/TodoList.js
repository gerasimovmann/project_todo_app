import Todo from './Todo'
import styles from './TodoList.module.css'


function TodoList({ todos, deleteTodo, toggleTodo }) {
  

  return !!todos.length ? <div className={styles.todoList}> {todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)}</div> : <h3>У Вас нет активных задач</h3>
}

export default TodoList
