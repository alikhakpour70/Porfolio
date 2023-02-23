import { useEffect, useState } from "react";
import "./projectStyle.css";
import { BsSliders } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const projects = [
  { title: "TodoList", value: "junior", image: "", to: "/todo" },
  { title: "Expense Tracker", value: "junior", image: "", to: "" },
  { title: "Contact list", value: "mid", image: "", to: "" },
  { title: "mashin hesab", value: "mid", image: "", to: "" },
  { title: "Online Shop", value: "pro", image: "", to: "https://xwatch.iran.liara.run" },
  { title: "My Library", value: "pro", image: "", to: "" },
];

const Project = () => {
  const [select, setSelect] = useState("");
  const [newSelect, setNewSelect] = useState([]);

  useEffect(() => {
    switch (select) {
      case "junior":
        const filter = projects.filter((p) => p.value == select);
        return setNewSelect(filter);
      case "mid":
        const filterMid = projects.filter((p) => p.value == select);
        return setNewSelect(filterMid);
      case "pro":
        const filterpro = projects.filter((p) => p.value == select);
        return setNewSelect(filterpro);
      default:
        return setNewSelect(projects);
    }
  }, [select]);

  const changeHandler = (e) => {
    const value = e.target.value;
    setSelect(value);
  };

  return (
    <div className="project">
      <div className="project-container">
        <h3>پروژه ها</h3>
        <div className="select-container">
          <p>
            مرتب سازی
            <i>
              <BsSliders />
            </i>
          </p>
          <select onChange={changeHandler}>
            <option value="" className="dd">
              همه
            </option>
            <option value="junior">مبتدی</option>
            <option value="mid">متوسط</option>
            <option value="pro">پیشرفته</option>
          </select>
        </div>
        <div className="products-container">
          {newSelect.length ? (
            newSelect.map((item, index) => (
              <div className="product" key={index}>
                <div className="image-container">
                  <img src="" />
                </div>
                <div className="title-reviwe">
                  <NavLink to={item.to} target={item.title == "Online Shop" &&  "_blank"}>
                    <div className="title-project">
                      <p>{item.title} </p> <p>{item.value}</p>
                    </div>
                  <p className="reviwe">  پیش نمایش    </p>
                  </NavLink>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
