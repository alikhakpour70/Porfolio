import { useState } from "react";
import Select from "react-select";
import style from "../todoStyle.module.css";

const options = [
  { label: "all", value: "all" },
  { label: "completed", value: "completed" },
  { label: "uncompleted", value: "uncompleted" },
];

const SelectTodo = ({ filterTodoHandler, filter, onchange }) => {
  
  return (
    <Select
      value={filter}
      onChange={onchange}
      options={options}
      className={style.selectTodo}
    />
  );
};

export default SelectTodo;
