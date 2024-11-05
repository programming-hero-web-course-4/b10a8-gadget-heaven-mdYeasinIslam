import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonBanner from "../../banner/CommonBanner";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductDetails = () => {
    const {id} = useParams()
    const [productDetails,setProductDetails] = useState({})
    const { product_title, product_image, price, description, Specification, rating } = productDetails
    let length = 5
    useEffect(()=>{
        axios.get('/data.json')
        .then(data =>{
            const allData = data.data
            const findProduct= allData.find(product=>product.id ==id)
            // console.log(findProduct)
            setProductDetails(findProduct)
        })
       
    },[id])
//    console.log(typeof rating)
    return (
        <div className="relative h-[45rem]">
            <div className="h-[18rem]">

            <CommonBanner/>
            </div>
            <div className="hero absolute top-[25%] left-[10%] bg-gray-100 border-2 max-w-5xl mx-auto p-5 rounded-xl">
                    <div className="md:grid grid-cols-3 gap-5 bg-base-200 ">
                        <img 
                            src={product_image}
                            className=" h-full rounded-lg shadow-2xl" />
                        <div className="w-full col-span-2 space-y-3">
                            <h1 className="text-2xl font-bold">{product_title}</h1>
                            <p className="font-medium">
                               price: $ {price}
                            </p>
                        <button className="btn btn-sm  bg-[#66bd1f78] hover:bg-[#66bd1fbb]" >In stock</button>
                        <p>{description}</p>
                            <h1 className="text-[1rem] font-semibold">Specification :</h1>
                        <ol className="list-decimal pl-5">
                            {
                                Specification?.map((sp,idx)=><li key={idx}>{sp}</li>)   
                            }
                        </ol>
                        <p>Rating : {rating}</p>
                       <div className={`flex gap-2 `}>
                            {
                                Array.from({ length }, (_, i) => i + 1).map((e, idx) => <FaStar key={idx} className={`${e<=rating?'text-yellow-500':''}`}/>)
                            }
                       </div>
                        <button className="btn bg-[#9538E2] text-white hover:bg-[#3e0969] btn-sm">Add to Cart <MdOutlineShoppingCart/></button>
                        </div>
                    </div>
             </div>
            
        </div>
    );
};

export default ProductDetails;