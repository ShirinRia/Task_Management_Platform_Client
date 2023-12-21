import { NavLink, Link } from "react-router-dom";

import './Navbar.css'
import { useContext } from "react";
import { Authcontext } from "../../../Provider/Provider";

const Navbar = () => {
    const { user, logout,  theme, settheme } = useContext(Authcontext)

    const handlelogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.

            })
            .catch((error) => {
                console.log(error.message)
            });

    }
    const handletheme = () => {
        // e.preventDeafault();

        settheme(!theme)
        console.log(theme)

    }
    const links = <>
        <li className="mr-4"><NavLink to={'/'}>Home</NavLink></li>
        {
            user &&
            <>
                <li className="mr-4"><NavLink to={'/dashboard'}>Task Management</NavLink></li>

            </>
        }

        <li className="mr-4"><NavLink to={'/dashboard'}>Task Management</NavLink></li>
        <li className="mr-4"><NavLink to={`/`}>Create an Advertise</NavLink></li>

    </>
    return (
        <div className="max-w-6xl mx-auto">
            <div className="navbar flex-col md:flex-row">

                <div className="navbar-start w-full md:w-1/2">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                  
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu-horizontal px-1 ${theme ? "text-white" : ""}`}>
                        {links}
                    </ul>
                </div>
                <div className="md:navbar-end my-5 md:my-0">
                    {user ?
                        <div className={`flex items-center gap-3 ${theme ? "text-white" : ""}`}>
                            <div className="flex gap-2 items-center border-2 border-base-200 px-3 py-1 rounded-lg mr-28 md:mr-0">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} className="w-full h-full rounded-full" />

                                </div>
                                <div>
                                    <p>{user.displayName}</p>
                                </div>
                            </div>

                            <a onClick={handlelogout} href="/login" className="btn hover:text-white hover:bg-[#e879f9] ">Sign Out</a>
                        </div>

                        : <Link to={'/login'} className="btn bg-[#e879f9] text-white hover:text-[#e879f9] hover:bg-white hover:outline hover:outline-offset-0 hover:outline-[#e879f9]"> Get Started </Link>

                    }

                    <button onClick={handletheme} className="ml-5">
                        <input type="checkbox" className="toggle" />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;