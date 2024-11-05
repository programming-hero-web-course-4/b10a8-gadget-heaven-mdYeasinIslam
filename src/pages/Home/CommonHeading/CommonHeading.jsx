
const CommonHeading = ({headTag,byText}) => {
    return (
        <div>
            {headTag&& headTag}
            {
                byText && byText
               
            }
            {/* <h1 className="text-2xl md:text-4xl  lg:text-6xl font-semibold">{heading}</h1>
            {
                paragraph && <p className="w-[95%] md:w-[58%] mx-auto">{paragraph}</p>
            } */}
        </div>
    );
};

export default CommonHeading;