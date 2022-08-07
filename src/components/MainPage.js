import React from "react"
import Featured from "./Featured";
import Hero from "./Hero";
import Course from "./Course";
import Footer from "./Footer";
import Contacts from "./Contacts";
import About from "./About";
import Faq from "./Faq";

const MainPage = () => {
    return (
        <main>
            {<Hero/>}
            {<About/>}
            {< Featured/>}
            {<Course/>}
            {<Faq/>}
            {<Contacts/>}
            <Footer/>
        </main>
    )


}

export default MainPage