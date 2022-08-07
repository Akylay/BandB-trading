import React from "react";

const CoursesPopUp = ({active, setActive,}) => {
    return (
        <div>
            <div className={active ? "pop-up__section active" : "pop-up__section"} onClick={() => setActive(false)}>
                <div className="pop-up" onClick={e => e.stopPropagation()}>
                    <h2 className="pop-up__title">Содержание курса</h2>
                    <div className="pop-up__content">
                        <p> 1. Введение в трейдинг</p>
                        <p> 2. Аспекты финансового планирования для трейдинга</p>
                        <p> 3. Выбор стратегии по уровню риска</p>
                        <p> 4. Инструменты для трейдинга</p>
                        <p> 5. Правила трейдинга</p>
                        <p> 6. Техника безопасности при использовании заемных средств</p>
                        <p> 7. Работа с биржевой информацией</p>
                        <p> 8. Фундаментальный анализ</p>
                        <p> 9. Новостной анализ</p>
                        <p> 10. Классический технический анализ</p>
                        <p> 11. Анализ технических индикаторов рынка</p>
                        <p> 12. Практика торговли</p>
                        <p> 13. Риск-менеджмент</p>
                        <p> 14. Сочетание разных методов анализа для эффективной торговли</p>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default CoursesPopUp