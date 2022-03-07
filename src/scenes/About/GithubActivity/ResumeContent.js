import React from "react";
import s from"../About.module.scss";

function ResumeContent(props) {
    return (
        <div className="resume-item">
            <h5 className={props.title ? "resume-title1" : "resume-no-title"}>
                {props.title}
            </h5><br />
            <p className={s.aboutDescription}>
                <em>{props.date}</em>
            </p>
            <br />
            <ul>
                {props.content.map((value, index) => (
                    <li key={index}> ‣ {value}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResumeContent;