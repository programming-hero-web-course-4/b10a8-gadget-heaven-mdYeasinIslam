import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../../../Context/ContextProvider";
 
const CategoryName = () => {
    const [categories,setCategories] = useState([])
    const { getCategoryName } = useContext(CategoryContext)
    const [isActive,setIsActive] = useState(1)
    useEffect(()=>{
        axios.get('catagoryName.json')
        .then(data =>setCategories(data.data)) 
    },[])
    const giveActiveStyle =(id,name) =>{
        const find = categories.find(cName=>cName.id ===id)
        if(find.id ==id){
            setIsActive(find.id)
        }
        getCategoryName(name)
    }
    return (
        <div className="lg:space-y-3 w-full grid grid-cols-3  lg:flex lg:flex-col gap-2 px-3 lg:px-0">
            {
                categories.map(name => <button
                    onClick={() => giveActiveStyle(name.id,name.category_name)}
                    key={name.id} 
                    className={`btn lg:btn-wide hover:bg-[#9538E2] hover:text-white ${isActive == name.id ?'bg-[#9538E2]  text-white underline':''} `}
                    >
                    {name.category_name}
                    </button>)
            }
        </div>
    );
};

export default CategoryName;