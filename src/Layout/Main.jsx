import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Footer from "../pages/Footer/Footer";


const Main = () => { 
    return (
        <div>
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;