import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonBanner from "../../banner/CommonBanner";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { SelectedProductContext, WishListProductContext } from "../../../../Context/ContextProvider";
import { toast } from "react-toastify";

const ProductDetails = () => {
    const {id} = useParams()
    const { cartProducts, setCartProducts } = useContext(SelectedProductContext)
    const { wishProducts, setWishProducts } = useContext(WishListProductContext)
    const [productDetails, setProductDetails] = useState({})
    const [disableBtn,setDisableBtn] = useState(false)
    const { product_title, product_image, price, description, Specification, rating } = productDetails

    //check Product if it already add in wishProducts; then disable the "Heart Button"
   

    //length for showing star of ratings
    let length = 5

    useEffect(()=>{
        axios.get('/data.json')
        .then(data =>{
            const allData = data.data
            const findProduct= allData.find(product=>product.id ==id)
            setProductDetails(findProduct)
        })
         wishProducts.find(product =>product.id ==id && setDisableBtn(true))

    }, [id,wishProducts])
    //handle clinking on "cart to add" button and set product to the "selected product context"
    const handleCartToAddFunc = () => {
        setCartProducts([...cartProducts, productDetails])
        toast('WOW! product is added to the cart')
    }
    //handle clinking on "Heart Icon" button and set product to the "wishList product context"
    const handleWishProduct = () => {
       
        setWishProducts([...wishProducts, productDetails])
        setDisableBtn(true)

        toast('WOW! product is added to the Wish List')
    }
    return (
        <div className="relative h-full lg:h-[45rem]">
            <div className=" h-[18rem]">

            <CommonBanner/>
            </div>
            <div className="lg:hero lg:absolute top-[25%] left-[10%] bg-gray-100 border-2 max-w-5xl mx-auto p-5 rounded-xl">
                    <div className="md:grid grid-cols-3 gap-5 bg-base-200 ">
                        <img 
                            src={product_image}
                            className="w-full lg:h-full rounded-lg shadow-2xl" />
                        <div className="w-full md:col-span-2 md:space-y-3 mt-10 md:mt-0">
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
                        <div className="flex items-center gap-3">

                            <button onClick={handleCartToAddFunc} className="btn bg-[#9538E2] text-white hover:bg-[#3e0969] btn-sm ">Add to Cart <MdOutlineShoppingCart /></button>
                            <button className={`${disableBtn? 'btn-disabled opacity-50':``}`}>  <FaHeart onClick={handleWishProduct} className=" w-6 h-6 text-red-800 " /></button>
                          
                        </div>
                        </div>
                    </div>
             </div>
            
        </div>
    );
};

export default ProductDetails;