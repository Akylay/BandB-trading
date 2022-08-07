import React from "react";
import CoursesCard from "./CoursesCard";
import courseImg1 from "../assets/images/course.img1.jpg"
import courseImg2 from "../assets/images/course.img2.jpg"
import CoursesInfo from "./CoursesInfo";
import Skills from "./Skills";

const Course = () => {
    return (
        <div className="course" id="course">
            <div className="container">
                <h1 className="section__title">Наши курсы</h1>
                <div className="d-flex justify-between">
                    <CoursesCard
                        title="Акции"
                        price="300$"
                        info1="1 неделя теории ОФФЛАЙН у нас в офисе"
                        info2="1 месяц практики ОНЛАЙН"
                        info3="Каждый день онлайн торговля вместе со всей группой"
                        info4="Регулярные групповые закрытые стримы в ZOOM"
                        info5="Индивидуальные стримы с участниками вопрос-ответ"
                    />
                    <CoursesCard
                        title="Криптовалюта"
                        price="200$"
                        info1="1 неделя теории ОФФЛАЙН у нас в офисе"
                        info2="1 месяц практики ОНЛАЙН"
                        info3="Каждый день онлайн торговля вместе со всей группой"
                        info4="Регулярные групповые закрытые стримы в ZOOM"
                        info5="Индивидуальные стримы с участниками вопрос-ответ"
                    />
                </div>
                <h1 className="section__title">Кому подойдёт этот курс</h1>
                <div className="d-flex justify-between">
                    <CoursesInfo
                        img={courseImg1}
                        title="Начинающим трейдерам"
                        desc="Научитесь анализировать финансовую информацию и торговать на основе данных, а не интуиции. Разработаете собственную торговую стратегию и сможете контролировать риски."
                    />
                    <CoursesInfo
                        img={courseImg2}
                        title="Тем, кто хочет перейти от инвестирования к трейдингу"
                        desc="Получите структурированные знания от экспертов-трейдеров. Попрактикуетесь на реальных кейсах. Поймёте, какой стиль работы на рынке вам подходит."
                    />
                </div>
                <Skills/>
            </div>

        </div>
    )
}


export default Course