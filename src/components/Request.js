import React, {useState} from "react";
import axios from "axios";

const Request = () => {
    const TOKEN = "5474548306:AAHKKFha-c29KAA31fhTBsNQ1LdaYDnxZZM"
    const CHAT_ID = "-1001662182810"
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
        <div className="request d-flex flex-column  justify-center">
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="request__input"
                        type="text"
                        placeholder="Имя"/>
                </label>
                <label>
                    <input
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="request__input"
                        type="email"
                        placeholder="Электронная почта"/>
                </label>
                <label>
                    <input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="request__input"
                        type="tel"
                        placeholder="Телефон"/>
                </label>
                <button type="submit" className="request__btn">Отправить</button>
            </form>
        </div>
    )
}

export default Request