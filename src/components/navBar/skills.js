import "./navStyle.css";
import library from "../../images/perspective_matte-60-128x128.png";
import teacher from "../../images/perspective_matte-63-128x128.png";
import search from "../../images/perspective_matte-304-128x128.png";
import { BiLibrary } from "react-icons/bi";

// const skills =[
//     {skill:"HTML",},
//     {skill:"CSS",},
//     {skill:"JavaScript",},
//     {skill:"React",},
//     {skill:"Research",},
// ]

const Skills = () => {
  return (
    <div className="skills-container">
      <h3>مهارت ها</h3>
      <div className="skills">
        <div className="skill">
          <label>HTML</label>
          <div className="box-skill">
            <p className="insaid"></p>
          </div>
        </div>
        <div className="skill">
          <label>CSS</label>
          <div className="box-skill">
            <p className="insaid-css"></p>
          </div>
        </div>
        <div className="skill">
          <label>JavaScript</label>
          <div className="box-skill">
            <p className="insaid-js"></p>
          </div>
        </div>
        <div className="skill">
          <label>React</label>
          <div className="box-skill">
            <p className="insaid-react"></p>
          </div>
        </div>
        <div className="skill">
          <label>Futuer Stades</label>
          <div className="box-skill">
            <p className="insaid-Futuer"></p>
          </div>
        </div>
      </div>
      <h3>رزومه کاری</h3>
      <div className="resume-container">
        <div className="right-resume">
          {/* <div>
            <i className="shipe"></i>
            <p className="sherkat"> کتابخانه تخصصی آخوند خراسانی </p>
            <p className="time"> از 1395 تا 1399 </p>
            <p className="title-resume">
              مسئول بخش امانات کتاخانه و ثبت کتاب های جدید
            </p>
          </div> */}
          <div>
            {/* <i className="shipe"></i> */}
            <p className="sherkat">موسسه ثامن </p>
            <p className="time"> از 1399 تا 1400 </p>
            <p className="title-resume">کمک مسئول آموزش و مدیریت کتابخانه</p>
          </div>
          <div>
            {/* <i className="shipe"></i> */}
            <p className="sherkat">موسسه ثامن </p>
            <p className="time"> از 1400 تا اکنون </p>
            <p className="title-resume">مسئول پژوهش</p>
          </div>
        </div>
        <div className="left-resume">
          <div className="circel">
            <img src={library} alt="library" />
            {/* <i> <BiLibrary /></i> */}
          </div>
          <div className="line"></div>
          {/* <div className="circel">
            <img src={teacher} alt="library" />
          </div> */}
          <div className="line last-line"></div>
          <div className="circel">
            <img src={search} alt="library" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
