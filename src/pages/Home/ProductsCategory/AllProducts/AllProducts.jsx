import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import { CategoryContext } from "../../../../Context/ContextProvider";
import ErrorPage from "../../../../Errorpage/ErrorPage";

const AllProducts = () => {
    const [allProducts ,setAllProducts] = useState([])
    const { filterByName, ifAllCategory } = useContext(CategoryContext)
    // console.log(filterByName,ifAllCategory)
    useEffect(()=>{
        axios.get('data.json')
        .then(data =>{
            const products = data.data
            const filterData = products.filter(pro =>pro.category == filterByName)
            if(ifAllCategory){
                setAllProducts(data.data)
            }
            else{ 
                setAllProducts(filterData)
            }
            })
    },[filterByName,ifAllCategory])
    // console.log(allProducts)
    return (
        <div className="grid grid-cols-3 gap-5">
          
           {allProducts.length ?
            allProducts?.map((product,index)=><Product key={index} product={product}/>)
            :
            <div>
                    <ErrorPage message="Sorry,No data is found"/>
            </div>
           }
        </div>
    );
};

export default AllProducts;