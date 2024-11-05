import { useLocation } from "react-router-dom/dist";
import Banner from "./banner/Banner";
import CommonHeading from "./CommonHeading/CommonHeading";
import AllProducts from "./ProductsCategory/AllProducts/AllProducts";
import CategoryName from "./ProductsCategory/CatagoryName/CategoryName";

const Home = () => {
    const byText = <div className="text-3xl font-semibold text-center">
        Explore Cutting-Edge Gadgets
    </div>
    const location = useLocation()
    console.log(location)
    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className=" h-[40rem] md:h-[53rem] lg:h-[60rem] ">
                <Banner />
            </div>
            <div className="max-w-6xl mx-auto mt-5">
                <CommonHeading byText={byText} />
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