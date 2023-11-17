import React, { useState } from "react";
import LoginModal from './LoginModal'; // Assume this is the modal component you created
import "./navbar.css";

const NavBar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);

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
        <button className="loginButton" onClick={() => setShowLoginModal(true)}>Login</button>
        <LoginModal show={showLoginModal} onClose={() => setShowLoginModal(false)} />
        </div>
        </nav>
    );
};

export default NavBar;