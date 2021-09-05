import React, { Component } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';



export default class Navbar extends Component {
    openMenu() {
        const menu = document.querySelector("#mobile-menu");
        const menuLinks = document.querySelector(".navbar__menu");
        
        menu.addEventListener("click", () => {
            menuLinks.classList.toggle("active")
            menu.classList.toggle("is-active")
        })
    }
    render() {
        return (
            // <!-- Navbar Section -->
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" href="#home" id="navbar__logo">HALID</Link>
        
                    <div className="navbar__toggle" id="mobile-menu" onClick={()=> this.openMenu()}>
                        <span className="bar"> </span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
        
                    <ul className="navbar__menu">
        
                        <li className="navber__item">
                            <Link to="/" href="#home" className="navbar__links" id="home-page">Home</Link>
                        </li>
        
                        <li className="navber__item">
                            <Link to="/product" href="#about" className="navbar__links" id="about-page">Product</Link>
                        </li>
        
                        <li className="navber__item">
                            <Link to = "/about" href="#services" className="navbar__links" id="services-page">About Us</Link>
                        </li>
        
                        <li className="navber__btn">
                            <Link to="/contact" href="#sign-up" className="navbar__links" id="signup">Contact</Link>
                        </li>
                        
                        <li className="navber__btn">
                            <Link to="/sign up" href="#sign-up" className="button" id="signup">Sign up</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
            )
        }
};
