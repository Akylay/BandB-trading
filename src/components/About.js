import React from "react"


const About = () => {
    const tick = <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="5" fill="#9799CE"/>
    </svg>
    return (
        <div className="about" id="about">
            <div className="container">
                <h1 className="section__title">Самое время заняться трейдингом</h1>
                <p className="about__desc"> {tick} Трейдер анализирует ситуацию на финансовом рынке, покупает и продаёт
                    активы,
                    зарабатывая на разнице цен.
                    Эти специалисты нужны в банковской сфере, в IT и в продажах.
                </p>
                <p className="about__desc">  {tick} Вы будете управлять активами, совершать
                    торговые операции, разрабатывать стратегии торговли.</p>
                <p className="about__desc">  {tick} Сможете сделать трейдинг своей профессией либо
                    совмещать его с основной работой и получать дополнительный заработок.</p>
                <div className="about__content"> Многие ждут спокойных времён, чтобы заняться биржевой торговлей,
                    трейдингом. Но в спокойные времена
                    зарабатывать на бирже гораздо сложнее. Сейчас на рынке много торговых идей с разным уровнем риска и
                    доходности. Буря, а не штиль, — лучшее время для ловли крупной рыбы!
                </div>
                <div className="about__interview d-flex flex-column align-center">
                    <p className="about__interview_title">Об авторах курса</p>
                    <div className="about__interview_video">
                        <iframe width="560" height="315"
                                src="https://www.youtube.com/embed/Wa1SabwYW2Q?controls=0&amp;start=3"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default About