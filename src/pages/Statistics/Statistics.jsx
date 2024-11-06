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


export default function Statistics() {

    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const products = data.data
                setAllProducts(products)
              
            })
    }, [])
    return (
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
    );
}

           