import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";
import { useContext } from "react";
import { NavbarContext } from "../Context/ContextProvider";

const Main = () => {
    const {showNav} = useContext(NavbarContext)
    return (
        <div>
            <div className={ ` ${showNav?'bg-[#9538E2] md:text-white':''}  `}>

            <Navbar/>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;