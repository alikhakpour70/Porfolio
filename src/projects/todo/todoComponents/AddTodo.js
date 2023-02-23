import { useEffect, useRef, useState } from "react";
import style from "../todoStyle.module.css";

const AddTodo = ({ dispatchTodos, userName, inputRef, edit }) => {
  const [todo, setTodo] = useState({ title: (edit ? edit.title : ""), id: "", isCompleted: false });
  const refEdit = useRef();

  useEffect(() => {
    refEdit.current.focus();
  }, []);


  const changeHandler = (e) => {
    const title = e.target.value;
    setTodo({ title: title });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // if (!userName) {
    //   alert("chose your name");
    // } else
    if (todo.title == "") {
      alert("add some thing");
    } else {
      const idNumber = Math.floor(Math.random() * 1000);
      const todoValue = { ...todo, id: idNumber, isCompleted: false };
      dispatchTodos(todoValue);
      todo.title = "";
    }
  };

  return (
    <form className={style.todoform} onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => changeHandler(e)}
        ref={refEdit}
        value={ todo.title}
        placeholder={edit? "update Todo" : "Add Todo"}
      />
      <button type="submit">{edit ? "update" : "Add"}</button>
    </form>
  );
};

export default AddTodo;
