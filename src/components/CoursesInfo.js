import React from "react";

const CoursesInfo = ({img, title, desc}) => {
    return (
        <div>
            <div className=" d-flex justify-between">
                <div className="d-flex">
                    <div className="course__img">
                        <img src={img} alt=""/>
                    </div>
                    <div className="course__info_content">
                        <h2 className="course__info_title">{title}</h2>
                        <p className="course__info_desc">{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesInfo