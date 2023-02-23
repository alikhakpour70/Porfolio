import {
  BsLinkedin,
  BsTelegram,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import {RiInstagramFill, RiWhatsappFill} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer">
        <div className="fast">
          <p>دسترسی سریع</p>
          <a href="#skills">درباره من</a>
          <a href="#skills"> مهارت ها</a>
          <a href="#skills"> پروژه ها</a>
          <a href="#skills"> ارتباطات</a>
        </div>
        <div className="media">
          <p>شبکه های اجتماعی</p>
          <div>
            <i>
              <RiInstagramFill />
            </i>
            <p>Instagram</p>
          </div>
          <div>
            <i>
              <RiWhatsappFill />
            </i>
            <p>Whatsapp</p>
          </div>

          <div>
            <i>
              <BsTelegram />
            </i>
            <p>Telegram</p>
          </div>
          <div>
            <i>
              <BsLinkedin />
            </i>
            <p>Linkdin</p>
          </div>
        </div>
        <div className="footer-info">
            <p>علی خاکپــور</p>
            <p>برنامه نویس وب</p>
            <p>  طراح سایت</p>
            <p> آینده پژوه</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
