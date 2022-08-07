import React from "react";
import logo2 from "../assets/images/logo.jpg";
import {Link} from "react-router-dom";

import {render} from "react-dom";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import {faInstagram} from "@fa-brands fa-instagram"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

    return (
        <div>
            <div className="footer">
                <div className="container d-flex align-center flex-column">
                    <Link to="" className="footer__logo">
                        <img src={logo2} alt=""/>
                    </Link>
                    <div className="footer__contacts d-flex flex-column">
                        <a href="tel:+79991782779" className="footer__num">+7 (999) 178-27-79</a>
                        <a href="markaev01@gmail.com" className="footer__mail">markaev01@gmail.com</a>
                    </div>
                    <div className="footer__icons d-flex justify-between">
                        {/*<FontAwesomeIcon icon = {faHome}/>*/}
                        {/*  <FontAwesomeIcon icon={faInstagram} />*/}
                    </div>
                    <div className="footer__address">
                        <p>Юр. адрес: 720001, г. Москва, ул......, 57</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

render(<div/>, document.getElementById("root"))
export default Footer