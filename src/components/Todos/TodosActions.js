import styles from './TodosActions.module.css'
import { HiOutlineRefresh } from "react-icons/hi";
import { RxTrash } from "react-icons/rx";
import Button from '../UI/Button';

function TodosActions ({refreshTodos, delDoneTodos}) {
    return <div className={styles.TodosActionsBlock}>
        <Button onClick={()=> refreshTodos()}><HiOutlineRefresh/></Button>
        <Button onClick={() => delDoneTodos()}><RxTrash/></Button>
        </div>
}

 export default TodosActions