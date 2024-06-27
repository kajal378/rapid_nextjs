"use client"
import React from "react";
import {useEffect , useState } from "react";
const Get = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3').then((result)=>{
        result.json().then((resp)=>{
            console.warn("result",resp)
            setdata(resp)
        })
    })
    },[])
    return (
        <>
        <div className="get">
            <h1>
                get api data
            </h1>
            
        </div>
        </>
    )
}
export default Get;