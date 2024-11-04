import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import './Navbar.css'
import { useContext } from "react";
import { NavbarContext } from "../../Context/ContextProvider";
const Navbar = () => {
    const { setShowNav } = useContext(NavbarContext)

    const handleNavColor = () => {
        setShowNav(false)
    }

    const manuIcons = <>
        <NavLink onClick={() => setShowNav(true)} to={`/home`}>Home</NavLink>
        <NavLink onClick={handleNavColor} to={`/statistics`}>Statistics</NavLink>
        <NavLink onClick={handleNavColor} to={`/dashboard`}>Dashboard</NavLink>
    </>
    return (
        <div className="navbar max-w-7xl mx-auto pt-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="manuIcon menu menu-sm dropdown-content bg-base-100  space-y-5 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {manuIcons}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl ">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="manuIcon menu menu-horizontal px-1 gap-5  lg:gap-10 font-medium text-[1rem]">
                    {manuIcons}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div className="tooltip tooltip-open tooltip-top tooltip-primary " data-tip="1">
                    <MdOutlineShoppingCart className="w-6 h-6" />
                </div>

                <FaRegHeart className="w-5 h-5" />
            </div> 
        </div>
    );
};

export default Navbar;