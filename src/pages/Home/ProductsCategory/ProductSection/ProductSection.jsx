import { Helmet } from "react-helmet";
import CommonHeading from "../../CommonHeading/CommonHeading";
import AllProducts from "../AllProducts/AllProducts";
import CategoryName from "../CatagoryName/CategoryName";

const ProductSection = () => {
    const byText = <div className="text-3xl font-semibold text-center">
        Explore Cutting-Edge Gadgets
    </div>
    return (
       <div className="max-w-6xl mx-auto mt-5">
            <Helmet>
                <title>All Gadget | Gadget Heaven
                </title>
            </Helmet>
                <CommonHeading byText={byText} />
                <div className="lg:grid lg:grid-cols-4 mt-16">
                    <div className=" lg:col-span-1 ">
                        <CategoryName/>
                    </div>
                    <div className="lg:col-span-3">
                        <AllProducts/>
                    </div>
                </div>
            </div>
    );
};

export default ProductSection;