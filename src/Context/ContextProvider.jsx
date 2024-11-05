import { createContext, useState } from "react";

export const NavbarContext= createContext('') 
export const CategoryContext = createContext('')
export const SelectedProductContext = createContext([])
export const WishListProductContext = createContext([])
const ContextProvider = ({children}) => {
    const [showNav, setShowNav] = useState(true)
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
    const navInfo = { showNav, setShowNav }
    const categoryInfo = { getCategoryName, filterByName, ifAllCategory }
    const cartInfo = { cartProducts, setCartProducts }
    const wishProductInfo = { wishProducts, setWishProducts }
    //    console.log(wishProducts)
    return (
        <div>
            <NavbarContext.Provider value={navInfo}>
                <CategoryContext.Provider value={categoryInfo} >
                    <SelectedProductContext.Provider value={cartInfo}>
                        <WishListProductContext.Provider value={wishProductInfo} >
                            {children}
                        </WishListProductContext.Provider>
                    </SelectedProductContext.Provider>
                </CategoryContext.Provider>   
            </NavbarContext.Provider>
        </div>
    );
};

export default ContextProvider;