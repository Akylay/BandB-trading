import React from "react";
import {Link} from "react-scroll";

const BurgerMenu = ({items, active, setActive}) => {
    return (
        <div className={active ? "menu active" : "menu"} onClick={() => setActive(false)}>
            <div className="blur">
                <div className="menu__content" onClick={e => e.stopPropagation()}>
                    <ul>
                        {items.map(item =>
                            <li>
                                <Link to={item.to}>{item.value}</Link>
                            </li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default BurgerMenu