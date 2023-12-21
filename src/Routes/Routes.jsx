import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";



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
            

        ],

    },
    
    
]);

export default Routes;
// SwiperJS , React Slick