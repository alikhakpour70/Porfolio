import { useState } from "react";
import './navStyle.css'

const navData = [
  { title: " درباره من", id: 1 },
  { title: "مهارت ها", id: 2 },
  { title: "پروژه ها ", id: 4 },
  { title: " ارتباطات", id: 3 },
];


const NavBar = ({dispatchTitle, titles}) => {

  const [title, setTitle] = useState();
  const titleHandler = (id) => {
    dispatchTitle(id);
    setTitle(id)
  };
  return (
    <div className="navBar">
    <div className="navBar-container">
      {navData.map((item) => (
        <div key={item.id} onClick={() => titleHandler(item.id)}  id="skills" className="div">
          <div  className={item.id == titles && "activ" }>{item.title}</div> 
        </div>
      ))}
    </div>
    </div>
  );
};

export default NavBar;
