import style from "../todoStyle.module.css";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiNeutralFill,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";



const TodoList = ({ todos, completedHandler, deletedHandler, onUpdateTodo }) => {

  const [edit, setEdit] = useState({ id: null, title:"", isCompleted: false });
  
  const submitHandler = (newValue)=>{
    onUpdateTodo(edit.id, newValue);
    setEdit({id:null, title:""})
  }

  
  const renderTodo = () => {
    if (!todos.length) return <h3>Add an Some Todo</h3>;
    if (todos.length)
      return todos.map((todo) => (
        <div key={todo.id} className={style.todoContainer}>
          <div className={style.checkBox}>
            <span
              onClick={() => completedHandler(todo.id)}
              className={
                todo.isCompleted == true ? style.completed : style.unCompleted
              }
            >
              <p className={style.checkIcon}>
                {todo.isCompleted ? (
                  <BsFillEmojiHeartEyesFill />
                ) : (
                  <BsFillEmojiNeutralFill />
                )}
              </p>
              <p>{todo.title}</p>
            </span>
          </div>
          <div className={style.icons}>
            <i className={style.trash} onClick={() => deletedHandler(todo.id)}>
              <FiTrash2 />
            </i>
            <i onClick={() => setEdit(todo)}>
              <FiEdit3 />
            </i>
          </div>
        </div>
      ));
  };

  return (
    <div className={style.todolist}>
      {edit.id ? <AddTodo dispatchTodos={submitHandler} edit={edit}/> :
        renderTodo()
      }
    </div>
  );
};

export default TodoList;
