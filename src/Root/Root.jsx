import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import DashBoard from "../pages/Dashboard/DashBoard";

const Root = () => {
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                 {
                    path:'/home',
                    element:<Home/>
                },
                 {
                    path:'/statistics',
                    element:<Statistics/>
                },
                 {
                    path:'/dashboard',
                    element:<DashBoard/>
                },
                 
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={routes}/>
        </div>
    );
};

export default Root;