import React, {useState} from "react";
import CoursesPopUp from "./CoursesPopUp";

const CoursesCard = ({title, price, info1, info2, info3, info4, info5}) => {

    const [popupActive, setPopupActive] = useState(true)

    const tick = <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5"/>
    </svg>

    return (
        <div>
            <div className="courses__card ">
                <h2 className="courses__card_title">{title}</h2>
                <h1 className="courses__card_price">{price}</h1>
                <div className="courses__card_info">
                    <p> {tick} {info1}</p>
                    <p> {tick} {info2}</p>
                    <p> {tick} {info3}</p>
                    <p> {tick} {info4}</p>
                    <p> {tick} {info5}</p>
                </div>
                <button
                    className="courses__card_btn d-flex justify-center align-center"
                    onClick={() => setPopupActive(true)}
                >Подробнее
                </button>
            </div>

            {/*<CoursesPopUp active={popupActive} setActive={setPopupActive}/>*/}
        </div>
    )
}

export default CoursesCard