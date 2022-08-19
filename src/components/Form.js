import React, {useState} from "react"
import axios from "axios";

const Form = ({active, setActive}) => {
    const TOKEN = "5453423652:AAESihWfcPTIQZss9RCoPi_5Pr7BfkX79nY"
    const CHAT_ID = " -1001662182810"
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        let message = `<b> Заявка с сайта!</b>\n`
        message += `<b> Отправитель: </b>${name}\n`
        message += `<b> Почта: </b>${email}\n`
        message += `<b> Номер телефона: </b>${phone}\n`

        axios.post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message
        })
        // .then((res) =>{
        //
        //
        // })
        // .catch((err) =>{
        //     console.warn("err")
        // })
        // .finally(() =>{
        //     console.log("конец")
        // })
    }

    return (
        <form>
            <div className={active ? "form__section active" : "form__section"} onClick={() => setActive(false)}>
                <div className="form " onClick={e => e.stopPropagation()}>
                    <h2 className="form__title">Записаться на курс</h2>
                    <p className="form__desc">Наш специалист свяжется с вами и ответит на любые ваши вопросы</p>
                    <div className="d-flex flex-column  justify-center">
                        <form onSubmit={handleSubmit}>
                            <label>
                                <input
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form__input"
                                    type="text"
                                    placeholder="Имя"/>
                            </label>
                            <label>
                                <input
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form__input"
                                    type="email"
                                    placeholder="Электронная почта"/>
                            </label>
                            <label>
                                <input
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form__input"
                                    type="tel"
                                    placeholder="Телефон"/>
                            </label>
                            <button type="submit" className="form__btn">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Form