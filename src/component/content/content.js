import React, { useEffect,useState } from 'react'
import style from "./content.module.css"
import img from "./../../img/profile.jpeg"
import img2 from "./../../img/bgProfile.jpg"
import pic4 from "./../../img/pic4.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faGraduationCap,faBook,faPhoneSquareAlt ,faEnvelopeSquare} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
export default function Content() {

    const [month,setMonth] = useState(null)
    const [year,setYear] = useState(null)

    useEffect(() => {
        const Bdate = new Date(2000,11,1,0,0,0,0).valueOf();
        const Now = new Date().valueOf();
        const ms = Now - Bdate;
        const s = ms/1000;
        const m = s/60;
        const h = m/60;
        const d = h/24;
        const year = d/365;
        const month =  (year - parseInt(year))*12;
        setMonth(parseInt(month))
        setYear(parseInt(year))
    },[])

    return (
        <div className={style.container}>
            <div className={style.picture} style={{backgroundImage:`url(${img2})`}}>
                <img src={img}/>
            </div>
            <div className={style.content}>
                <span>Thanaphorn Wutthikunprapan</span>
            </div>
            <div className={style.iconContact}>
                <span>
                    <a href="tel:0818879752" target="_blank">
                        <FontAwesomeIcon icon={faPhoneSquareAlt} />
                    </a> 
                </span>
                <span>
                    <a href="mailto:twutthikunprapan@gmail.com" target="_blank">
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                    </a>
                </span>     
            </div>
            <div className={style.conIntro}>
                <div>Welcome to my web site. </div>
                <div>Personal information, education, skills, work and volunteer stories</div>
                <div>Thank you for your interest in me.</div>
            </div>
            <div className={style.conHiLine}>
                <div className={style.line}></div>
                <span>Hi, I'm Khaimook.</span>
                <div className={style.line}></div>
            </div>
            <div className={style.containerIcon}>
                <Link to="/khaimook/skill">
                    <div className={style.link}>
                        <div className={style.linkIcon}>
                            <div className={style.bgIcon}><FontAwesomeIcon icon={faBook} /></div>
                        </div>
                        <div className={style.linkText}>Skill</div>
                    </div>
                </Link>
                <Link to="/khaimook/education">
                    <div className={style.link}>
                        <div className={style.linkIcon}>
                            <div className={style.bgIcon}><FontAwesomeIcon icon={faGraduationCap} /></div>
                        </div>
                        <div className={style.linkText}>Education</div>
                    </div>
                </Link>
                <Link to="/khaimook/stories">
                    <div className={style.link}>
                        <div className={style.linkIcon}>
                            <div className={style.bgIcon}><FontAwesomeIcon icon={faNewspaper} /></div>
                        </div>
                        <div className={style.linkText}>Stories</div>
                    </div>
                </Link>
        
            </div>
            <div className={style.conAboutMe} style={{backgroundColor: '#92b8e2'}}>
                <div className={style.textAbout}>
                    <div>Khaimook</div>
                    <div>Miss Thanaphorn Wutthikunprapan</div>
                    <div>Date of Birth | 1 November 2000</div>
                    <div>I am {year} years {month} months.</div>
                    <div>Gender | Female</div>
                    <div>Bangkok Thailand</div>
                </div>
                <div className={style.pic3}>
                    <img src={img}/>
                </div>
            </div>
            <div className={style.conPro}>
                <div className={style.pic4}>
                    <img src={pic4}/>
                </div>
                <div className={style.textFav}>
                    <div className={style.favthing}>Favorite thing</div>
                    <div>Hobby : Board games [Chess, Sam-kok]</div>
                    <div>Sport : Volleyball</div>
                    <div>Color : Blue lover</div>
                    <div>Pet : Dog and many cats</div>
                    <div>Music : Rap, Hip-hop, '90s</div>
                    <div>Food : Noodles</div>
                    <div>Drink : Greentea</div>
                    <div>Season : Winter</div>

                </div>
            </div>

        </div>
    )
}
