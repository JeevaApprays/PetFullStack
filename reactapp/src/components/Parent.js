import React, { useEffect, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[a,seta]=useState(1);
    const add =()=>{
      seta(a+1);
    }
    const sub =()=>{
        seta(a-1);
    }
    useEffect (()=>{
        console.log("1");
    });
    useEffect (()=>{
        console.log("2");
    },[]);
    useEffect (()=>{
        console.log("3");
    },[a]);


  return (
    <div>
        <Child message = "Here is my props demo"></Child>
        <h1>{a}</h1>
        <button onClick={add}>Inc</button>
        <button onClick={sub}>Dec</button>
    </div>
  )
}
export default Parent