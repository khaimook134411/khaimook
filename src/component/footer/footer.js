import React from 'react'
import style from "./footer.module.css"
import facebook from "./../../img/facebook.png"
import line from "./../../img/line.png"
import ig from "./../../img/ig.png"
import twitter from "./../../img/twitter.png"
import map from "./../../img/map.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.location}>
                <div className={style.imgMedia}>
                    <a href="https://www.google.com/maps/place/655+%E0%B8%8B%E0%B8%AD%E0%B8%A2+%E0%B8%89%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87+1+%E0%B9%81%E0%B8%82%E0%B8%A7%E0%B8%87+%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B1%E0%B8%87+%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%B1%E0%B8%87+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3+10520+%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2/@13.727213,100.764317,13z/data=!4m5!3m4!1s0x311d6652f660944b:0xdc4690919ee6a45b!8m2!3d13.7272126!4d100.7643172?hl=th-TH" target="_blank"><img src={map} /></a>
                    665 AAA 1 Chalongkrung 1 Ladkrabang Bangkok 10520
                </div>


                <div className={style.mapouter}>
                    <div className={style.gmap_canvas}>
                        <iframe className={style.iframe} id="gmap_canvas" src="https://maps.google.com/maps?q=655%20%E0%B8%89%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%201&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" ></iframe>
                    </div>
                </div>
            </div>

            <div className={style.gridRight}>
                <div className={style.icon}>
                    <span>
                        <a href="tel:0818879752" target="_blank">
                            <FontAwesomeIcon icon={faPhoneSquareAlt} />
                        </a>
                    </span>
                        +668 1887 9752
                    </div>
                <div className={style.icon}>
                    <span>
                        <a href="mailto:twutthikunprapan@gmail.com" target="_blank">
                            <FontAwesomeIcon icon={faEnvelopeSquare} />
                        </a>
                    </span>
                        twutthikunprapan@gmail.com
                    </div>
                <div className={style.imgMedia}>
                    <a href="https://www.facebook.com/thanaphorn.wutthikulpraphan.3" target="_blank"><img src={facebook} /></a>
                    <a href="https://line.me/ti/p/a-D3XiAVA-" target="_blank"><img src={line} /></a>
                    <a href="https://www.instagram.com/khaimook.t/" target="_blank"><img src={ig} /></a>
                    <a href="https://twitter.com/khaimook_t" target="_blank"><img src={twitter} /></a>
                </div>
            </div>
        </div>
    )
}
