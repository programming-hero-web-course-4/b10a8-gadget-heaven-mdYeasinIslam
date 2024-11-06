import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import CommonHeading from "../Home/CommonHeading/CommonHeading";


export default function Statistics() {

    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const products = data.data
                setAllProducts(products)
              
            })
    }, [])
    const headTag = <h1 className="text-center text-3xl font-semibold mb-3">Statistics</h1>
    const byText = <p className="px-3 lg:px-0 md:text-center lg:w-[60%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    return (
        <div>
            <div className="bg-[#9538E2] h-full text-white py-12 space-y-5 mb-10">
                <CommonHeading headTag={headTag} byText={byText} />
                <div className=" flex justify-center gap-5">

                </div>
            </div>
        <BarChart
            width={1000}
            height={300}
            data={allProducts}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
            barSize={20}
            >
            <Helmet>
                <title>Statistics | Gadget Heaven</title>
            </Helmet>
            <XAxis dataKey="product_title" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="price" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
        </div>
    );
}

           