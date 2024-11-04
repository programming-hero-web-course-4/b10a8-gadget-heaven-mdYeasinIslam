import { Link } from "react-router-dom";

// { id, product_id, category, , description, Specification, availability, rating }
const Product = ({product}) => {
    const { id, product_title, product_image, price } = product

    return (
        <div className=" bg-base-100  shadow-xl h-full flex flex-col justify-center p-2">
            <figure className=" w-full">
                <img
                    src={product_image}
                    alt="Products"
                    className="rounded-xl w-full h-[18rem]" />
            </figure> 
            <div className=" h-full w-full py-4 flex flex-col space-y-2 ">
    
                <h2 className="card-title">{product_title} </h2>
                <p className="font-medium"><span >Price</span> : $ {price}</p>
              
            </div>
                <div className=" ">
                    <Link to={`/home/${id}`}  className="btn btn-sm  outline outline-1 outline-[#9538E2] text-[#9538E2]">View Details</Link>
                </div>
        </div>
    );
};

export default Product;