import React, { useEffect, useRef, useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[a,seta]=useState(1);
    const foc =useRef();
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
        foc.current.focus();
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
        <input type='text' ref={foc}></input>
    </div>
  )
}
export default Parent