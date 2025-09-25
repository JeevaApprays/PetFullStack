import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MyWebsite</div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/demo">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
