import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom/dist";

const PurchaseModal = ({ cartProducts, setCartProducts }) => {

    const totalPrice = cartProducts.reduce((total, current) => total + current.price, 0)
    const navigate = useNavigate()
    const changeRoute = () => {
        navigate('/home')
        setCartProducts([...[]])
    }
    return (
      
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle " >
            <div className=" bg-white px-5 py-3 rounded-xl  text-center">
                   <FaThumbsUp className="w-full  h-9 text-green-800 "/>
                <p className="py-4 font-semibold text-xl">Payment Successfull</p>
                <p>Thanks for purchasing</p>
                <p className="font-semibold">Total : $ {totalPrice.toFixed(3)} </p>
                    <div className="modal-action  ">
                        <form className="w-full" method="dialog">
                        <button onClick={changeRoute} className="btn  flex w-full">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
    );
};

export default PurchaseModal;