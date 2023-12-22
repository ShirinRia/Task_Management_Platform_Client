
import { NavLink, Outlet } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";

import './Dashboard.css'
import { FaHome } from "react-icons/fa";

import { RiProfileFill } from "react-icons/ri";
import { MdAddBox } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";

const Dashboard = () => {
    const { logout } = useAuth()
    const handlelogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="max-w-7xl flex flex-col md:flex-row" >
            {/* dashboard side bar */}
            <div className="min-h-[100vh] min-w-64 text-white bg-gray-600 " >
                <ul className="menu p-4 text-lg space-y-7">
                    <div className="flex items-center gap-2 ">
                        <FaHome></FaHome>
                        <NavLink to={'/'} >

                            <p style={{ color: 'white' }}> Home</p>
                        </NavLink>
                    </div>

                    <div className="flex items-center gap-2">
                    <MdAddBox />
                        <NavLink to={'/dashboard/addtask'} >

                            <p style={{ color: 'white' }}> Add Task</p>
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-2">
                    <FaTasks />
                        <NavLink to={'/dashboard/tasklist'} >

                            <p style={{ color: 'white' }}> Previous Task</p>
                        </NavLink>
                    </div>

                    <div className="flex items-center gap-2">
                    <RiProfileFill />
                        <NavLink to={'/dashboard/profile'} >
                            <p style={{ color: 'white' }}> Profile</p>
                        </NavLink>
                    </div>

                    <hr className="bg-white mr-2 mb-2" />

                    <div className="flex gap-2 flex-col" >
                        <NavLink to="/" onClick={handlelogout} style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                            <IoLogOutOutline />
                            Logout </NavLink>

                    </div>

                </ul>
            </div >
            {/* dashboard content */}
            < div className="py-4 px-8 flex-grow w-3/5 md:w-full ">
                <Outlet></Outlet>
            </div >
        </div >
    );
};

export default Dashboard;