import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faGraduationCap, faBars, faAddressCard, faBook } from '@fortawesome/free-solid-svg-icons'
import CSS from "./navbar.module.css"
import img from './../../img/logo.png'
import { Link } from "react-router-dom";

export default function Navbar() {
    const [display, setDisplay] = useState(false);
    const displayNav = () => {
        setDisplay(!display)
    }

    return (
        <>
            <div className={CSS.container}>
                <div className={CSS.logo}>
                    <img src={img} />
                    <span>Khaimook</span>
                </div>

                <div className={CSS.menu}>
                    <div className={CSS.link}>
                        <Link to="/">
                            <div className={CSS.linkIcon}>
                                <FontAwesomeIcon icon={faAddressCard} />
                            </div>
                            <div className={CSS.linkText}>Profile</div>
                        </Link>
                    </div>

                    <div className={CSS.link}>
                        <Link to="/skill">
                            <div className={CSS.linkIcon}>
                                <FontAwesomeIcon icon={faBook} />
                            </div>
                            <div className={CSS.linkText}>Skill</div>
                        </Link>
                    </div>

                    <div className={CSS.link}>
                        <Link to="/education">
                            <div className={CSS.linkIcon}>
                                <FontAwesomeIcon icon={faGraduationCap} />
                            </div>
                            <div className={CSS.linkText}>Education</div>
                        </Link>        
                    </div>

                    <div className={CSS.link}>
                        <Link to="/stories">
                            <div className={CSS.linkIcon}>
                                <FontAwesomeIcon icon={faNewspaper} />
                            </div>
                            <div className={CSS.linkText}>Stories</div>
                        </Link>
                    </div>
                    <div className={CSS.hamburger}
                        onClick={displayNav}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>




            </div>
            { //jsx
                display && (
                    <div className={CSS.linkMobile}>
                        <Link to="/">
                            <div onClick={displayNav} className={CSS.linkIconMobile}>
                                <div className={CSS.linkIconMobile2}>
                                    <FontAwesomeIcon icon={faAddressCard} />
                                </div>
                                <div className={CSS.linkTextMobile}> Profile</div>
                            </div>
                        </Link>
                        
                        <Link to="/skill">
                            <div onClick={displayNav} className={CSS.linkIconMobile}>
                                <div className={CSS.linkIconMobile2}>
                                    <FontAwesomeIcon icon={faBook} />
                                </div>
                                <div className={CSS.linkTextMobile}>Skill</div>
                            </div>
                        </Link>

                        <Link to="/education">
                            <div onClick={displayNav} className={CSS.linkIconMobile}>
                                <div className={CSS.linkIconMobile2}>
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                <div className={CSS.linkTextMobile}>Education</div>
                            </div>
                        </Link>

                        <Link to="/stories">
                            <div onClick={displayNav} className={CSS.linkIconMobile}>
                                <div className={CSS.linkIconMobile2}>
                                    <FontAwesomeIcon icon={faNewspaper} />
                                </div>
                                <div className={CSS.linkTextMobile}>Stories</div>
                            </div>
                        </Link>
                    </div>

                )
            }
        </>
    )
}
