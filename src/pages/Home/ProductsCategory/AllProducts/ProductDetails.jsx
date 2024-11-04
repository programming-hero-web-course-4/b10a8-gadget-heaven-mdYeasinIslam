import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../banner/Banner";

const ProductDetails = () => {
    const {id} = useParams()
    const [productDetails,setProductDetails] = useState({})
    const { product_title, product_image, price, description } = productDetails

    useEffect(()=>{
        axios.get('/data.json')
        .then(data =>{
            const allData = data.data
            const findProduct= allData.find(product=>product.id ==id)
            // console.log(findProduct)
            setProductDetails(findProduct)
        })
       
    },[id])
    return (
        <div>
            {product_title}
        </div>
    );
};

export default ProductDetails;