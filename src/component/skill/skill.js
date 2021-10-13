import React from 'react'
import style from "./skill.module.css"
import html from "./../../img/html.jpeg"
import css from "./../../img/css.png"
import javaS from "./../../img/javaS.jpeg"
import php from "./../../img/php.jpeg"
import sql from "./../../img/sql.png"
import py from "./../../img/py.png"
import off from "./../../img/Office-365.png"
import creative from "./../../img/creative.jpeg"
import matlab from "./../../img/matlab.jpeg"
export default function Skill() {
    return (
        <div className={style.container}>
            <div className={style.skill}>Skill</div>
            <div className={style.conRow}>
                <div></div>
                <div>
                    <span style={{backgroundImage:`url(${html})`}}></span>
                    <span style={{backgroundImage:`url(${css})`}}></span>
                    <span style={{backgroundImage:`url(${javaS})`}}></span>
                </div>
                <div></div>
            </div>
            <div className={style.conRow}>
                <div></div>
                <div>
                    <span style={{backgroundImage:`url(${php})`}}></span>
                    <span style={{backgroundImage:`url(${sql})`}}></span>
                    <span style={{backgroundImage:`url(${py})`}}></span>
                </div>
                <div></div>
            </div>
            <div className={style.conRow}>
                <div></div>
                <div>
                    <span style={{backgroundImage:`url(${off})`}}></span>
                    <span style={{backgroundImage:`url(${creative})`}}></span>
                    <span style={{backgroundImage:`url(${matlab})`}}></span>
                </div>
                <div></div>
            </div>
        </div>
    )
}

