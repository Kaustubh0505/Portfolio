import React from "react";
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className="nav">
            <span className="span1">Portfolio</span>
            <ul className="ul1">
                <li><a href="#skills">Skills</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>


        </nav>
    )
}

export default Navbar;