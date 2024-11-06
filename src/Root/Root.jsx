import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Statistics from "../pages/Statistics/Statistics";
import DashBoard from "../pages/Dashboard/DashBoard";
import ErrorPage from "../Errorpage/ErrorPage";
import ProductDetails from "../pages/Home/ProductsCategory/AllProducts/ProductDetails";
import ProductSection from "../pages/Home/ProductsCategory/ProductSection/ProductSection";
import UpcomingGadget from "../pages/UpcomingGadget/UpcomingGadget";

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
                     path:'products',

                    element:<ProductSection/>,
                    
                },
                
                 {
                     path:`/products/:id`,

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
                {
                    path:'/upcoming',
                    element:<UpcomingGadget/>
                }
                 
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