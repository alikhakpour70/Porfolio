import { useEffect, useState } from "react";
import "./style.css";

export const BlogDetails = [
  {
    subject: "AI",
    title: "هوش مصنوعی",
    text: [
      {
        describtion:
          "هوش مصنوعی (به انگلیسی: smart mind یا fake mind یا Artificial intelligence) (به اختصار: AI)، هوشی است که توسط ماشین‌ها ظهور پیدا می‌کند، در مقابل هوش طبیعی[الف] که توسط جانوران شامل انسان‌ها نمایش می‌یابد. کتاب‌های AI پیشرو، این شاخه را به عنوان شاخه مطالعه بر روی «عوامل هوشمند» تعریف می‌کنند: هر سامانه‌ای که محیط خود را درک کرده و کنش‌هایی را انجام می‌دهد که شانسش را در دستیابی به اهدافش بیشینه می‌سازد.[ب] برخی از منابع شناخته شده از اصطلاح «هوش مصنوعی» جهت توصیف ماشینی استفاده می‌کنند که عملکردهای «شناختی» را از روی ذهن انسان‌ها تقلید می‌کنند، همچون «یادگیری» و «حل مسئله»، با این حال این تعریف توسط محققان اصلی در زمینه AI رد شده‌",
        history:
          " هوش مصنوعی در ۱۹۵۶ میلادی تبدیل به شاخه‌ای آکادمیک شد و در سال‌های پس از آن چندین موج خوش‌بینی را تجربه کرده و مجدد دچار امواج ناامیدی و کمبود بودجه شده (که به آن «زمستان AI» می‌گویند)، سپس فناوری‌های جدیدی در پی آن آمده و موفقیت و بودجه‌های تحقیقاتی این حوزه مجدداً احیا گشته‌اند. تحقیقات AI رهیافت‌های متفاوتی را از زمان تأسیسش امتحان کرده و آن‌ها را کنار گذاشته‌است، رهیافت‌هایی چون: شبیه‌سازی مغز، مدل‌سازی حل مسئله توسط مغز انسان، منطق صوری، بانک‌های اطلاعاتی بزرگ دانش و تقلید رفتار جانوران. در اولین دهه‌های قرن ۲۱ میلادی، یادگیری ماشینی که شدیداً از آمار ریاضیاتی بهره می‌برد در این حوزه غلبه داشت و این فناوری اثبات کرد که به شدت موفق است و به حل چندین مسئله چالش‌برانگیز در صنعت و فضای آکادمیک کمک نمود",
        type: "",
      },
    ],
    id: 1,
    isShow: false,
  },
  {
    subject: "dataSince",
    title: " علم داده",
    text: [{ describtion: "", history: "", type: "" }],
    id: 2,
    isShow: false,
  },
  {
    subject: "DataAnalise",
    title: "انالیز داده ",
    text: [{ describtion: "", history: "", type: "" }],
    id: 4,
    isShow: false,
  },
  {
    subject: "FutuerStadies",
    title: "آینده پژوهی ",
    text: [{ describtion: "", history: "", type: "" }],
    id: 3,
    isShow: false,
  },
];

const Blogs = () => {
  const [show, setShow] = useState(BlogDetails);
  const [select, setSelect] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(()=>{
    switch (selected) {
        case "AI":
          const filterAI = show.filter((p) => p.subject == "AI");
          return setSelect(filterAI);
        case "DataSaince":
          const filterDS = show.filter((p) => p.subject == "dataSince");
          return setSelect(filterDS);
        case "DataAnalise":
          const filterDA = show.filter((p) => p.subject == "DataAnalise");
          return setSelect(filterDA);
        case "FutuerStadies":
          const filterFS = show.filter((p) => p.subject == "FutuerStadies");
          return setSelect(filterFS);
        default:
          return setSelect(show)
    
      }
  },[selected])

  const selectHandler = (e) => {
    const select = e.target.value;
    setSelected(select)
    
  };

  const showHandler = (id) => {
    const index = show.findIndex((p) => p.id === id);
    const blog = { ...show[index] };
    if (blog.isShow == false) {
      blog.isShow = true;
    } else {
      blog.isShow = false;
    }
    console.log(blog.id);
    const update = [...show];
    update[index] = blog;
    console.log(update);
    setShow(update);
  };

  return (
    <div className="blogs-container">
      <div className="blogs">
        <select onChange={selectHandler}>
          <option value="">همه موارد</option>
          <option value="AI">هوش مصنوعی</option>
          <option value="DataSaince">  علم داده</option>
          <option value="DataAnalise"> آنالیز داده</option>
          <option value="FutuerStadies"> آینده پژوهی</option>
        </select>

        {select.map((item) => (
          <article
            key={item.id}
            className={!item.isShow ? "article-container" : "full-article"}
          >
            <h3>{item.title}</h3>
            <div>
              <label>تعریف</label>
              <p>{item.text[0].describtion} </p>
            </div>
            <div>
              <label>تاريخچه</label>
              <p>{item.text[0].describtion} </p>
            </div>
            <div>
              <label>اقسام</label>
              <p>{item.text[0].type} </p>
            </div>
            <button className="btn" onClick={() => showHandler(item.id)}>
              more
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
