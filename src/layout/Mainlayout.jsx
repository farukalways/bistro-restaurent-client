import { Outlet } from "react-router-dom";
import Navbar from "../page/Sheard/Navbar/Navbar";
import Footer from "../page/Sheard/Footer/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh]">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
