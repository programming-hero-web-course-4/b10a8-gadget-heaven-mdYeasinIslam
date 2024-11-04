import { useLoaderData } from "react-router-dom";
import Banner from "./banner/Banner";
import CommonHeading from "./CommonHeading/CommonHeading";
import AllProducts from "./ProductsCategory/AllProducts/AllProducts";
import CategoryName from "./ProductsCategory/CatagoryName/CategoryName";

const Home = () => {

    return (
        <div className="w-full">
            <div className=" h-[40rem] md:h-[53rem] lg:h-[60rem] ">
                <Banner />
            </div>
            <div className="max-w-6xl mx-auto mt-5">
                <CommonHeading byText="Explore Cutting-Edge Gadgets" />
                <div className="md:grid grid-cols-4 mt-16">
                    <div className="col-span-1 ">
                        <CategoryName />
                    </div>
                    <div className="col-span-3">
                        <AllProducts />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;