import styles from './TodoForm.module.css'
import { useState } from 'react'
import { BiPlus } from "react-icons/bi";
import Button from '../UI/Button';


function TodoForm({ addTodo }) {
  
  const [textTodo, setTextTodo] = useState('')

  const submitForm = (event) => {
    event.preventDefault()
    addTodo(textTodo)
    setTextTodo('')
  }

  return (
    <div className={styles.todoForm}>
    <form onSubmit={submitForm}>
      <input
        placeholder='Enter new todo'
        value={textTodo}
        type='text'
        id='input-app'
        onChange={(e) => setTextTodo(e.target.value)}
      />
      <Button type='submit'><BiPlus className={styles.buttonSvg}/></Button>
    </form>
    </div>
  )
}
export default TodoForm
