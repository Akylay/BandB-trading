import React from "react";
import phone from "../assets/images/telephone-call.png"
import mail from "../assets/images/email.png"
import instagram from "../assets/images/instagram.png"
import telegram from "../assets/images/telegram.png"
import Request from "./Request";

const Contacts = () => {
    return (
        <div className="contacts" id="contacts">
            <div className="container d-flex justify-between">
                <div className="contacts__left">
                    <p className="contacts__text"> Вы можете отавить заявку на курс, чтобы узнать подробности или
                        связаться с нами самостоятельно</p>
                        <div className="contacts__left_info d-flex align-center">
                            <img src={phone} alt=""/>
                            <a href="tel:+79991782779">+7 (999) 178-27-79</a>
                        </div>
                        <div className="contacts__left_info d-flex align-center">
                            <img src={mail} alt=""/>
                            <a href="markaev01@gmail.com">markaev01@gmail.com</a>
                        </div>
                        <div className="contacts__left_info d-flex align-center">
                            <img src={instagram} alt=""/>
                            <a href="#">@markaev01</a>
                        </div>
                        <div className="contacts__left_info d-flex align-center">
                            <img src={telegram} alt=""/>
                            <a href="https://web.telegram.org/z/#-1719659264" target="_blank">B&B_TRADING</a>
                        </div>
                </div>
                {<Request/>}
            </div>
        </div>
    )
}

export default Contacts