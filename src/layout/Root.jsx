
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Header from "./Header";

const Root = () => {
  return (
    <div className="font-poppins">
      {/* Scroll reset on route change */}
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
