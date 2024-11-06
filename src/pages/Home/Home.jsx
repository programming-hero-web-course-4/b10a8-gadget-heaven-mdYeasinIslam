import { Helmet } from "react-helmet";
import Banner from "./banner/Banner";
import CommonHeading from "./CommonHeading/CommonHeading";
import AllProducts from "./ProductsCategory/AllProducts/AllProducts";
import CategoryName from "./ProductsCategory/CatagoryName/CategoryName";

const Home = () => {
    const byText = <div className="text-3xl font-semibold text-center">
        Explore Cutting-Edge Gadgets
    </div>
   
    return (
        <div className="w-full max-w-7xl mx-auto">
            <Helmet>
                <title>Home | Gadget Heaven</title>
            </Helmet>
            <div className=" h-[40rem] md:h-[53rem] lg:h-[60rem] ">
                <Banner />
            </div>
            <div className="max-w-6xl mx-auto mt-5">
                <CommonHeading byText={byText} />
                <div className="lg:grid lg:grid-cols-4 mt-16">
                    <div className=" lg:col-span-1 ">
                        <CategoryName/>
                    </div>
                    <div className="lg:col-span-2">
                        <AllProducts/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;