// import axios from "axios";
// import { useEffect } from "react";

import { useContext, useState } from "react";
import CommonHeading from "../Home/CommonHeading/CommonHeading";
import Carts from "./Carts/Carts";
import WishLists from "./WishList/WishLists";
import { SelectedProductContext, WishListProductContext } from "../../Context/ContextProvider";
import PurchaseModal from "./PurchaseModal/PurchaseModal";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const DashBoard = () => {
    const { cartProducts, setCartProducts } = useContext(SelectedProductContext)
    const { wishProducts } = useContext(WishListProductContext)
    const [showComponent, setShowComponent] = useState(true)
    const [products, setProducts] = useState(cartProducts)
   
    // calculate total price 
    let calculateTotal = products?.reduce((total,current) => {
        return total + current.price
    }, 0);
    
console.log(calculateTotal)
    //sorting based on price(descending order)
    const sortingFunction = (value) => {
        const sortByPrice = products?.sort((a, b) => b.price - a.price)

        if (value) {
            console.log(sortByPrice)
            setProducts([...sortByPrice])
            toast('WOW!! Products are sorted by descending order')

        }

    }
    //after clicking purchesing
    const resetCartAfterPurchesing = (value) => {
        setProducts([...[]])
        // setTimeout(() => {
        //     setCartProducts([...[]])
        // }, 2000);
        console.log('getIn', value)
    }
    //  heading tag
    const headTag = <h1 className="text-center text-3xl font-semibold mb-3">Dashboard</h1>
    const byText = <p className="text-center w-[60%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gadget Heaven</title>
            </Helmet>
            <div className="bg-[#9538E2] h-full text-white py-12 space-y-5">
                <CommonHeading headTag={headTag} byText={byText} />
                <div className=" flex justify-center gap-5">

                    <button onClick={() => setShowComponent(true)} className={`btn px-5 bg-[#9538E2]  hover:bg-white hover:text-black btn-sm ${showComponent ? 'bg-white text-black' : 'text-white'}`}> Cart</button>
                    <button onClick={() => setShowComponent(false)} className={`btn bg-[#9538E2] hover:bg-white hover:text-black btn-sm ${showComponent ? 'text-white ' : 'bg-white text-black'}`}> Wishlist</button>
                </div>
            </div>
            <div>
                {
                    showComponent ?
                        <>
                            <div className="flex justify-between items-center py-8 max-w-5xl mx-auto">
                                <h1 className="text-xl font-semibold">Cart</h1>
                                <div className="flex items-center gap-3">
                                    <h3 className="font-semibold">Total cost : $<span>{calculateTotal.toFixed(3)}</span></h3>

                                    <button onClick={() => sortingFunction(true)} className="btn btn-sm outline outline-1 outline-[#9538E2] text-[#9538E2] duration-500 hover:bg-[#9538E2] hover:text-white">Sort by Price</button>

                                    <button className="btn btn-sm bg-[#9f50e0] text-[#ffffff] hover:bg-[#762fb0] " onClick={() => { return [document.getElementById('my_modal_5').showModal(), resetCartAfterPurchesing('hi')] }}>Purchase</button>

                                    <PurchaseModal cartProducts={cartProducts} setCartProducts={setCartProducts} />
                                </div>
                            </div>
                            <div className="space-y-5 ">

                                {products?.map((product, idx) => { return [<Carts key={idx} product={product} />] })}
                            </div>
                        </>

                        :
                        <>
                            <div className="py-8 max-w-5xl mx-auto">
                                <h1 className="text-xl font-semibold">WishList</h1>
                            </div>
                            <div className="space-y-5 ">

                                {wishProducts?.map((product, idx) => { return [<WishLists key={idx} product={product} />] })}
                            </div>
                        </>


                }
            </div>
        </div>
    );
};

export default DashBoard;