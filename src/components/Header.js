import React from "react"
import logo from "../assets/images/logo.jpg"
import {Link} from "react-scroll";
import Navbar from "./Navbar";


const Header = () => {
    return (
        <header className="header fixed  " id="header">
            <div className="container header__container d-flex align-center justify-between">
                <Link to="hero" className="header__logo">
                    <img src={logo} alt=""/>
                </Link>
                <div className="header__nav d-flex align-center justify-between">
                    <Link to="about" className="header__link" activeClass="active">О нас</Link>
                    <Link to="course" className="header__link" activeClass="active">Курсы</Link>
                    <Link to="contacts" className="header__link" activeClass="active">Контакты</Link>
                    <Link to="faq" className="header__link" activeClass="active">FAQ</Link>
                </div>


                <Navbar/>


            </div>
        </header>
    )
}

export default Header