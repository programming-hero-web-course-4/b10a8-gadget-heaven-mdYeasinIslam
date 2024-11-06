
const DisplayGadget = ({ gadget }) => {
    // console.log(Object.keys(gadget))
    const {  name, brand, releaseDate, features, price, imageUrl } = gadget
   console.log(features)
    return (
        <div className={`card bg-base-100 image-full w-[100%] h-[25rem] shadow-xl col-span-1`}>
            <figure>
                <img
                    src={imageUrl}
                    alt="gadget"
                className="w-full"/>
            </figure>
            <div className=" card-body">
                <h2 className="card-title">{name}</h2>
                <span>Brand : {brand}</span>
                <span> Price: ${price}</span>
                <h2 className="font-semibold text-[1rem]">Features :</h2>
                <ul className="list-decimal pl-5">
                    <li>Display : { features.display}</li>
                    <li>Processor: { features.processor}</li>
                    <li>Baterry-Life: { features.batteryLife}</li>
                </ul>
                <span className="font-semibold"> Release Date: {releaseDate}</span>

            </div>
        </div>
    );
};

export default DisplayGadget;