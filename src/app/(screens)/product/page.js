"use client"
import axios from "axios"
import React from "react"
import { useEffect, useState } from "react"

export default function page() {
    const [product, setproduct] = useState({})
    // useEffect(async () => {
    //     let data = await fetch('https://dummyjson.com/products')
    //     // .then(res => res.json())
    //     // .then(console.log);
    //     data = await data.json();
    //     console.log(data);
    //     setproduct(data.products);

    // }, [])
    let abData = async () => {
        let response = await axios.get("https://dummyjson.com/recipes");
        console.log("helllo response", response.data.recipes)
        setproduct(response.data.recipes)
    }

    useEffect(() => {
        abData();
    }, []);
    return (
        <>
            <div className="product">
                <h1>product list</h1>
                {
                    product && product.length > 0 ?
                    product.slice(0,10)
                        .map((item, index) => (
                            <div key={index}>
                                <h3>{item.name}</h3>
                            </div>
                        )
                        ) : ''
                }
            </div>
        </>
    )
}