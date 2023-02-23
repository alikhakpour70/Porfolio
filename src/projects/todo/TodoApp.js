import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import AddTodo from "./todoComponents/AddTodo";
import Login from "./todoComponents/Login";
import Select from "./todoComponents/SelectTodo";
import TodoList from "./todoComponents/TodoList";
import style from "./todoStyle.module.css";
import {FiHome} from "react-icons/fi"

const AppTodo = ({inputRef,}) => {
  const [todos, setTodos] = useState([]);
  const [select, setSelect] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isShow, setIsShow] = useState(false);
  const [login, setLogin] = useState(null);
  const [userName, setUserName] = useState("");
 
  useEffect(() => {
    filterTodoHandler(filter.value);
  }, [todos, filter]);



  const changeHandler = (e) => {
    setFilter(e);
    filterTodoHandler(e.value);
  };

  const dispatchTodos = (values) => {
    setTodos([...todos, values]);
  };

  const completedHandler = (id) => {
    const index = todos.findIndex((p) => p.id === id);
    const todo = { ...todos[index] };
    todo.isCompleted = !todo.isCompleted;
    const updateTodos = [...todos];
    updateTodos[index] = todo;
    setTodos(updateTodos);
  };

  const deletedHandler = (id) => {
    const todo = todos.filter((p) => p.id !== id);
    setTodos(todo);
  };

  const filterTodoHandler = (values) => {
    switch (values) {
      case "completed":
        return setSelect(todos.filter((f) => f.isCompleted == true));
      case "uncompleted":
        return setSelect(todos.filter((f) => f.isCompleted == false));
      default:
        setSelect(todos);
        break;
    }
  };

  
const updateTodo = ( id, newValue)=>{

  const index = todos.findIndex(index => index.id === id)
  const editTodo = {...todos[index]};
  editTodo.title = newValue.title
  const updateTodo = [...todos];
  updateTodo[index] = editTodo;
  setTodos(updateTodo)
}

  return (
    <div className={style.appTodoContainer}>
      <div className={style.titelName}>
        <h2>Todo App</h2>
        <NavLink to="/" className={style.homeIcone}><FiHome /></NavLink>
      </div>

      {isShow ? (
        <Login
          isShow={isShow}
          setIsShow={setIsShow}
          login={login}
          setLogin={setLogin}
        />
      ) : null}

       <AddTodo dispatchTodos={dispatchTodos} userName={userName} />

      <Select
        filterTodoHandler={filterTodoHandler}
        filter={filter}
        setFilter={setFilter}
        onchange={changeHandler}
      />

      <TodoList
        todos={select}
        completedHandler={completedHandler}
        deletedHandler={deletedHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default AppTodo;
