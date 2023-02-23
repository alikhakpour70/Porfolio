import { useEffect, useRef, useState } from "react";
import style from '../todoStyle.module.css'

const Login = ({ isShow, setIsShow, login, setLogin, addUserName }) => {
  const changeHandler = (e) => {
    setLogin(e.target.value);
  };

  const ref = useRef()
  useEffect(()=>{
    ref.current.focus()
  },[])

  const submitHandler = (e) => {
    e.preventDefault();
    addUserName(login);
    setIsShow(!isShow);
  };

  return (
    <form onSubmit={submitHandler} className={style.formLogin}>
      <input type="text" onChange={changeHandler} ref={ref}/>
      <button type="submit">login</button>
    </form>
  );
};

export default Login;
