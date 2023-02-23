import Footer from "../headFooter/footer";
import Header from "../headFooter/header";
import './layout.css'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
