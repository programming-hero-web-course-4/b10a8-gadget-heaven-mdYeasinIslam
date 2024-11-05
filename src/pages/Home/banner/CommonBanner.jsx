import CommonHeading from "../CommonHeading/CommonHeading";

const CommonBanner = () => {
    const headTag = <h1 className="text-center text-3xl font-semibold mb-3">Product Details</h1>
    const byText = <p className="text-center w-[70%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    return (
        <div className="bg-[#9538E2] h-full text-white pt-12">
            <CommonHeading headTag={headTag} byText={byText}/>
        </div>
    );
};

export default CommonBanner;