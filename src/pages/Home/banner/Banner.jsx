import { NavLink } from "react-router-dom";
import CommonHeading from "../CommonHeading/CommonHeading";


const Banner = () => {

    const headTag = <div className=" space-y-5"> 
        <h1 className="text-2xl md:text-4xl  lg:text-6xl font-semibold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className="w-[95%] md:w-[58%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    </div>
    return (
        <div className="bg-[#9538E2] rounded-b-mb h-[28rem] md:h-[36rem] lg:h-[40rem] relative  text-center pt-16 text-white space-y-7 lg:px-2">
            <CommonHeading headTag={headTag}/>
            <NavLink className="btn rounded-full px-10 text-[#9538E2] text-[1rem]"  to={'/dashboard'}><button>Shop now</button></NavLink>
            <div className="absolute w-[90%]  max-w-4xl left-[5%] xl:left-[17%] lg:pt-10">
                <img className="md:w-full md:h-[27rem] lg:h-[32rem] rounded-xl" src="/assets/banner.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;