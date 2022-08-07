import React, {useState} from "react"
import hero from "../assets/images/hero.jpg"
import whatsapp from "../assets/images/whatsapp.png"
import Form from "./Form";


const Hero = () => {
    const [formActive, setFormActive] = useState(true)
    return (
        <div className="hero " id="hero">
            <div className="container d-flex justify-between">
                <div className="hero__info">
                    <h1 className="hero__title">ДОБРО ПОЖАЛОВАТЬ!</h1>
                    <p className="hero__desc">12 недельная программа обучения трейдингу на фондовом рынке США.
                        На курсе вы научитесь торговать на финансовых рынках. Выстроите свою стратегию, узнаете, как
                        контролировать риски. Сможете совершать обдуманные сделки.</p>
                    <button className="hero__btn "
                            onClick={() => setFormActive(true)}
                    >Записаться на курс
                    </button>
                </div>
                <div className="hero__img">
                    <img src={hero} alt=""/>
                </div>
            </div>


            <Form active={formActive} setActive={setFormActive}/>


            <a href="https://skobelkin.ru/whatsapp/79991782779?text=Здравствуйте!+У+меня+есть+вопрос)"
               className="whatsapp">
                <img src={whatsapp} alt=""/>
            </a>
        </div>
    )
}
export default Hero