import React from "react";
import "./navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/about">About Us</a>
            </li>
            <li>
            <a href="/contact">Contact Us</a>
            </li>
        </ul>
        <div>
        <button className="loginButton">Login</button>
        </div>
        </nav>
    );
    };

export default NavBar;