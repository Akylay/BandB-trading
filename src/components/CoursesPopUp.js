import React from "react";

const CoursesPopUp = ({active, setActive,}) => {
    return (
        <div>
            <div className={active ? "pop-up__section active" : "pop-up__section"} onClick={() => setActive(false)}>
                <div className="pop-up" onClick={e => e.stopPropagation()}>
                    <h2 className="pop-up__title">Чтобы узнать подробнее о курсе, напишите нам на WhatsApp, наш специалист
                        ответит на любые ваши вопросы или переходите по ссылке на телеграмм
                        канал </h2>
                    <div className="pop-up__buttons d-flex justify-between">
                        <a href="https://skobelkin.ru/whatsapp/79991782779?text=Здравствуйте!+У+меня+есть+вопрос)" target="_blank">
                            <button className="pop-up__btn">WhatsApp</button>
                        </a>
                        <a href="https://web.telegram.org/z/#-1719659264" target="_blank">
                            <button className="pop-up__btn">Телеграмм</button>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}


export default CoursesPopUp