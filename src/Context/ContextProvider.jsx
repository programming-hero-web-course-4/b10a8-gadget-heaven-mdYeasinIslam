import { createContext, useState } from "react";

export const CategoryContext = createContext('')
export const SelectedProductContext = createContext([])
export const WishListProductContext = createContext([])

const ContextProvider = ({ children }) => {
    const [filterByName,setFilterByName] = useState('')
    const [ifAllCategory,setIfAllCategory] = useState(true)
    const [cartProducts, setCartProducts] = useState([])
    const [wishProducts,setWishProducts] = useState([])
    const getCategoryName =(name)=>{
        if (name ==="All Products"){ 
            setIfAllCategory(true) 
        }
        else{
            setIfAllCategory(false)
        }
       setFilterByName(name)
    }
    const categoryInfo = { getCategoryName, filterByName, ifAllCategory }
    const cartInfo = { cartProducts, setCartProducts, wishProducts }
    const wishProductInfo = { wishProducts, setWishProducts }
    //    console.log(wishProducts)
    return (
        <div>
            <CategoryContext.Provider value={categoryInfo} >
                    <SelectedProductContext.Provider value={cartInfo}>
                        <WishListProductContext.Provider value={wishProductInfo} >
                            {children}
                        </WishListProductContext.Provider>
                    </SelectedProductContext.Provider>
            </CategoryContext.Provider>   
        </div>
    );
};

export default ContextProvider;