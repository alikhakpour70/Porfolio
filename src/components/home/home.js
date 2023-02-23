import "./homeStyle.css";
import imageProfile from "../../images/photo_2023-02-03_21-12-06.jpg";
// import address from "../../images/perspective_matte-30-128x128.png";
// import call from "../../images/perspective_matte-123-128x128.png";
// import email from "../../images/perspective_matte-127-128x128.png";
import NavBar from "../navBar/navBar";
import React, { Suspense, useState } from "react";
import AboutMe from "../navBar/aboutme";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Project from "../projectComponent/Project";
import Skills from "../navBar/skills";
import Connection from "../navBar/Connection";

const Home = () => {
  const [title, setTitle] = useState(1);

  const dispatchTitle = (id) => {
    setTitle(id);
  };

  return (
    <main className="home">
      <section className="home-container"   id="skills">
        <section className="first-info-container">
          <div className="image-profile">
            <img src={imageProfile} />
          </div>
          <h1>علی خاکــپور</h1>
          <h3>بـرنامه نويــس وب</h3>
          {/* <h3>  پژوهشگر</h3> */}
          <div className="info">
            <div>
              <p className="title">
                شماره تماس <AiFillPhone />{" "}
              </p>
              <p> 09158706269 </p>
            </div>
            <div>
              <p className="title">
                ایمیل <MdOutlineAlternateEmail />
              </p>
              <p> alit70kh@gmail.com </p>
            </div>
            <div>
              <p className="title">
                آدرس <HiLocationMarker />{" "}
              </p>
              <p> خراسـان رضـوی بجستان </p>
            </div>
          </div>
        </section>
      </section>
      <NavBar dispatchTitle={dispatchTitle}  titles={title} />
      {title == 1 && <AboutMe />}
      {title == 2 && <Skills />}
        {title == 4 && <Project />}
      {title == 3 && <Connection />}
    </main>
  );
};

export default Home;
