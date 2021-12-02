import React from 'react'
import style from "./education.module.css"
import kmitl from "./../../img/kmitl.JPG"
import chb from "./../../img/chb.jpeg"
import nb from "./../../img/nb.jpeg"
import pb from "./../../img/pb.jpeg"
import pc from "./../../img/ppp.jpeg"
export default function Education() {
    return (
        <div className={style.container}>
            <div className={style.education}>Education</div>
            <div className={style.conGrid}>
                <div></div>
                <div>
                    <div className={style.conContent}>
                        <a className={style.logo} 
                           href="https://www.reg.kmitl.ac.th/index/" target="_blank"
                           style={{backgroundImage:`url(${kmitl})`}}>  
                        </a>
                        <div className={style.text}>
                            <div>
                                <div className={style.headText}>@King Mongkut's Institute of Technology Ladkrabang</div>
                                <div>Information Engineering</div>
                                <div>GPA | 3.44</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.conContent}>
                        <a className={style.logo}
                           href="http://www.chanhun.ac.th/" target="_blank"
                           style={{backgroundImage:`url(${chb})`}}>
                        </a>
                        <div className={style.text}>
                            <div>
                                <div className={style.headText}>@Chanhunbamphen School</div>
                                <div>Sci - Math</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.conContent}>
                        <a className={style.logo}
                           href="http://www.bodin3.ac.th/mainpage" target="_blank"
                           style={{backgroundImage:`url(${nb})`}}>
                        </a>
                        <div className={style.text}>
                            <div>
                                <div className={style.headText}>@Nawaminthrachinuthit Bodindecha School</div>
                                <div>Sci - Math</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.conContent}>
                        <a className={style.logo}
                           href="http://www.pcb.ac.th/" target="_blank"
                           style={{backgroundImage:`url(${pb})`}}>
                        </a>
                        <div className={style.text}>
                            <div className={style.headText}>@Pracharat Bamphen School</div>
                        </div>
                    </div>
                    <div className={style.conContent}>
                        <a className={style.logo}
                           href="http://anubanphichit.com/mainpage" target="_blank"
                           style={{backgroundImage:`url(${pc})`}}>
                        </a>
                        <div className={style.text}>
                            <div>
                                    <div className={style.headText}>@Anuban Phichit School</div>
                                    <div>Gifted</div>
                

                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
