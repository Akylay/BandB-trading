import React, {useState} from "react";
import arrow from "../assets/images/arrow.icon.png"


const Faq = () => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <div className="faq" id="faq">
                <div className="container d-flex justify-between">
                    <div className="faq__title">
                        <h1> Часто задаваемые вопросы</h1>
                    </div>
                    <div className="faq__content">
                        <div className="faq__info">
                            <div className="faq__info_title" onClick={() => setShow(!show)}>
                                <img src={arrow}/>
                                <h3>Что такое трейдинг?</h3>
                            </div>
                            {show && <p className="faq__info_desc">Это биржевая торговля. С английского trading так и
                                переводится —
                                торговля, заключение сделок. Трейдинг- это покупка/продажа финансовых инструментов
                                (акции,
                                облигации, опционы, валюты, и др). Мы обучаем трейдингу акциями и опционами на акции
                                таких
                                крупных компаний, как : TSLA, FACEBOOK, APPLE, MICROSOFT, GOOGLE, AMAZON и др.</p>}
                        </div>
                        <div className="faq__info">
                            <div className="faq__info_title" onClick={() => setShow(!show)}>
                                <img src={arrow}/>
                                <h3>Говорят, трейдинг — это очень сложно. У меня получится?</h3>
                            </div>
                            {show &&
                                <p className="faq__info_desc">Сложность трейдинга в том, что в нём есть большая доля
                                    неожиданности и неопределённости. Однако необходимые навыки и знания помогают
                                    предсказать
                                    многие риски. Поэтому успех обучения на платформе зависит только от вас. Во время
                                    прохождения курса уделяйте больше внимания практике и читайте дополнительную
                                    литературу.
                                    Также вам помогут опытные спикеры, которые будут курировать вас на протяжении всего
                                    обучения на платформе.</p>}
                        </div>
                        <div className="faq__info">
                            <div className="faq__info_title" onClick={() => setShow(!show)}>
                                <img src={arrow}/>
                                <h3>Будет ли практика во время обучения на платформе?</h3>
                            </div>
                            {show && <p className="faq__info_desc">Конечно! Вы будете решать реальные кейсы от экспертов
                                курса,
                                попрактикуетесь работать в торговом терминале.</p>}
                        </div>
                        <div className="faq__info">
                            <div className="faq__info_title" onClick={() => setShow(!show)}>
                                <img src={arrow}/>
                                <h3>Получится ли совмещать обучение на платформе с работой?</h3>
                            </div>
                            {show &&
                                <p className="faq__info_desc">Вы можете изучать материалы курса в удобном вам режиме,
                                    совмещать обучение на платформе с работой и личной жизнью. Более того, все материалы
                                    будут
                                    доступны и по окончании курса, так что вы сможете освежить свои знания в любой
                                    момент.</p>}
                        </div>
                        <div className="faq__info">
                            <div className="faq__info_title" onClick={() => setShow(!show)}>
                                <img src={arrow}/>
                                <h3 className="">Сколько часов в неделю мне нужно будет уделять обучению на
                                    платформе?</h3>
                            </div>
                            {show &&
                                <p className="faq__info_desc">Всё зависит только от вас. В среднем пользователи нашей
                                    платформы занимаются от 3 до 5 часов в неделю.</p>}
                        </div>
                        <div className="faq__info">
                            <div className="faq__info_title" onClick={() => setShow(!show)}>
                                <img src={arrow}/>
                                <h3 className="">Кто будет мне помогать в обучении на платформе?</h3>
                            </div>
                            {show &&
                                <p className="faq__info_desc">У вас будет куратор в Telegram-чате, а проверяющий эксперт
                                    прокомментирует практические работы и даст полезные советы. Так вы сможете перенять
                                    опыт,
                                    профессиональные знания и лайфхаки.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Faq