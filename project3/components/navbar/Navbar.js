import React, { Component } from 'react';
import "./navbar.css";


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
            <
            nav className = "navbar" >
            <
            div className = "navbar__container" >
            <
            a href = "#home"
            id = "navbar__logo" > HALID < /a>

            <
            div className = "navbar__toggle"
            id = "mobile-menu"
            onClick = {
                () => this.openMenu() } >
            <
            span className = "bar" > < /span> <
            span className = "bar" > < /span> <
            span className = "bar" > < /span> <
            /div>

            <
            ul className = "navbar__menu" >

            <
            li className = "navber__item" >
            <
            a href = "#home"
            className = "navbar__links"
            id = "home-page" > Home < /a> <
            /li>

            <
            li className = "navber__item" >
            <
            a href = "#about"
            className = "navbar__links"
            id = "about-page" > Product < /a> <
            /li>

            <
            li className = "navber__item" >
            <
            a href = "#services"
            className = "navbar__links"
            id = "services-page" > About Us < /a> <
            /li>

            <
            li className = "navber__btn" >
            <
            a href = "#sign-up"
            className = "button"
            id = "signup" > Contact < /a> <
            /li>

            <
            li className = "navber__btn" >
            <
            a href = "#sign-up"
            className = "button"
            id = "signup" > Sign up < /a> <
            /li>

            <
            /ul> <
            /div> <
            /nav>
        )
    }
};