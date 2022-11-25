import Navbar from "./Navbar";
import Image from "next/image";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen bg-gradient-to-tr from-[#a8c1ec] to-[#E1EBFA]">
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
