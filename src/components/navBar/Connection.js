const Connection = () => {
  return (
    <div className="conntion-container">
      {/* <div className="conntion"> */}
        <h3>ارتباطات</h3>
        <form className="form-connection">
          <div className="connetion-name">
            <label>نام و نام خانوادگی</label>
            <input type="text" />
          </div>
          <div className="connetion-name">
            <label>موضوع</label>
            <input type="text" name="subject" />
          </div>
          <div className="connetion-name">
            <label>پیام</label>
            <textarea rows="10" cols="80" name="texts"> </textarea>
          </div>
          <button type="submit">ارسال </button>
        </form>
      {/* </div> */}
    </div>
  );
};

export default Connection;
