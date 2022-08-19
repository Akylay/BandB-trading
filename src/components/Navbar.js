import React, {useState} from "react";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false)
    const item = [{value: "Главная", to: "hero"}, {value: "О нас", to: "about"}, {
        value: "Курсы",
        to: "course"
    }, {value: "Контакты", to: "contacts"}, {value: "FAQ", to: "faq"},]
    return (
        <div>
            <div className="navbar">
                <div className="burger">
                    <div className="burger__btn" onClick={() => setMenuActive(!menuActive)}>
                        <span/>
                    </div>
                </div>
            </div>

            <BurgerMenu active={menuActive} setActive={setMenuActive} items={item}/>
        </div>


    )
}

export default Navbar