import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import DashBoard from "../pages/Dashboard/DashBoard";
import ErrorPage from "../Errorpage/ErrorPage";
import ProductDetails from "../pages/Home/ProductsCategory/AllProducts/ProductDetails";

const Root = () => {
    const routes = createBrowserRouter([
        {
            path:'/',
            element:<Main/>,
            errorElement:<ErrorPage/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                 {
                    path:'/home',

                    element:<Home/>,
                    
                },
                
                 {
                    path:`home/:id`,

                    element:<ProductDetails/>,
                    
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