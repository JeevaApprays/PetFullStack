import React from "react";

const Header = () => {
  return (
    <header style={{background:"#000fff"}}>
      <h1 style={{textAlign:"center", color:"white"}}>AIML</h1>
      <nav style={{display:"flex", gap:"30px", color:"white"}}>
        <a style={{color:"white"}} href="/">Home</a>
        <a href="/demo">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
