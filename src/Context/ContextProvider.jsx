import { createContext, useState } from "react";

export const NavbarContext= createContext('')
 export const CategoryWiseShow =createContext('')
const ContextProvider = ({children}) => {
    const [showNav, setShowNav] = useState(true)
    const [filterByName,setFilterByName] = useState('')
    const [ifAllCategory,setIfAllCategory] = useState(true)

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
    return (
        <div>
            <NavbarContext.Provider value={navInfo}>
                <CategoryWiseShow.Provider value={categoryInfo} >
                    {children}
                </CategoryWiseShow.Provider>   
            </NavbarContext.Provider>
        </div>
    );
};

export default ContextProvider;