import React from "react";

const Skills = () => {
    const tick = <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill="#9799CE"/>
    </svg>

    return (
        <div>
            <h1 className="section__title">Чему вы научитесь у нас</h1>
            <div className="container">
                <div className="skills">
                    <p className="skills__desc"> {tick} Строить свою стратегию торговли</p>
                    <p className="skills__desc"> {tick} Рассчитывать и контролировать риски, учитывая психологический
                        аспект</p>
                    <p className="skills__desc"> {tick} Работать с торговыми терминалами</p>
                    <p className="skills__desc"> {tick} Оценивать торговые инструменты с помощью фундаментального и
                        технического анализа</p>
                    <p className="skills__desc"> {tick} Фильтровать новостные источники и видеть важную информацию</p>
                    <p className="skills__desc"> {tick} Анализировать стратегии других трейдеров</p>
                    <p className="skills__desc"> {tick} Соблюдать баланс собственных и заёмных средств</p>
                    <p className="skills__desc"> {tick} Составлять торговый план трейдера</p>
                </div>
            </div>
        </div>
    )
}

export default Skills