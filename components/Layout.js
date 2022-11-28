import Navbar from "./Navbar";
import Image from "next/image";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-tr from-color1 to-color2">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
