import React, {useState} from "react"
import Request from "./Request";

const Form = ({active, setActive}) => {


    return (
        <form>
            <div className={active ? "form__section active" : "form__section"} onClick={() => setActive(false)}>
                <div className="form " onClick={e => e.stopPropagation()}>
                    <h2 className="form__title">Записаться на курс</h2>
                    <p className="form__desc">Наш специалист свяжется с вами и ответит на любые ваши вопросы</p>
                    {<Request/>}
                </div>
            </div>
        </form>
    )
}
export default Form