import React, { Component } from 'react';
import Navbar.css from './Navbar';

export default class Navbar extends Component {
    render() {
        return (
            // <!-- Navbar Section -->
            <
            nav class = "navbar" >
            <
            div class = "navbar__container" >
            <
            a href = "#home"
            id = "navbar__logo" > MESUT < /a>

            <
            div class = "navbar__toggle"
            id = "mobile-menu" >
            <
            span class = "bar" > < /span> <
            span class = "bar" > < /span> <
            span class = "bar" > < /span> <
            /div>

            <
            ul class = "navbar__menu" >

            <
            li class = "navber__item" >
            <
            a href = "#home"
            class = "navbar__links"
            id = "home-page" > Home < /a> <
            /li>

            <
            li class = "navber__item" >
            <
            a href = "#about"
            class = "navbar__links"
            id = "about-page" > About < /a> <
            /li>

            <
            li class = "navber__item" >
            <
            a href = "#services"
            class = "navbar__links"
            id = "services-page" > Services < /a> <
            /li>

            <
            li class = "navber__btn" >
            <
            a href = "#sign-up"
            class = "button"
            id = "signup" > Sign up < /a> <
            /li>

            <
            /ul> <
            /div> <
            /nav>
        )
    }
}