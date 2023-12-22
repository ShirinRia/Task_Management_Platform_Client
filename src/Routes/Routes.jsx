import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";
import Dashboard from "../Layout/Dasboard/Dashboard";
import Userprofile from "../Layout/Dasboard/Userprofile";
import Addtask from "../Layout/Dasboard/Addtask";
import Tasklist from "../Layout/Dasboard/Prev_Task/Tasklist";
import PrivateRoute from "./PrivateRoute";
import Aboutus from "../Layout/Pages/About/Aboutus";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <Errorpage/>,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader:() =>fetch('/partnership.json'),
            },
            
            {
                path: "/login",
                element: <Login/>,
                // loader:() =>fetch('/partnership.json'),
            },
            {
                path: "/signup",
                element: <Register/>,
                // loader:() =>fetch('/partnership.json'),
            },
            {
                path: "/about",
                element: <Aboutus/>,
                // loader:() =>fetch('/partnership.json'),
            },
            

        ],

    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        // errorElement: <Errorpage/>,
        children: [
            {
                path: "profile",
                element: <Userprofile />,
            },
            {
                path: "addtask",
                element: <Addtask />,
            },
            
            {
                path: "tasklist",
                element: <Tasklist />,
            },
           
           
        ],
        // errorElement: <Errorpage></Errorpage>,
    },
    
]);

export default Routes;
// SwiperJS , React Slick