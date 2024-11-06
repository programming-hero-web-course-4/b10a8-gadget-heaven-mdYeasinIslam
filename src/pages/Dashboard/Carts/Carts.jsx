import { AiFillDelete } from "react-icons/ai";

const Carts = ({ product }) => {
    const { product_title, product_image, price, description } = product
   
    return (
        <div className="lg:flex items-center justify-between p-2  border-2 max-w-5xl mx-auto rounded-xl">
            <div className="flex gap-5 items-start">
                <img className="w-32" src={product_image} alt="" />
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold">{product_title}</h1>
                    <p>{description}</p>
                    <p>Price :$ {price}</p>
                </div>
            </div>
            <div title="Want to delete??" className="flex justify-center  btn ">
               <span className="block md:hidden">Delete Items</span> <AiFillDelete className="w-6 h-6 text-red-500"/>
            </div>
        </div>
    );
};

export default Carts;