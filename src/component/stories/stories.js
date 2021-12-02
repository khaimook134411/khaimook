import React from 'react'
import style from "./stories.module.css"
export default function Stories() {
    return (
        <div className={style.container}>
            <div className={style.stories}>Stories</div>
            <div className={style.pdf}>
                <iframe style={{width:'1000px',height:'100vh'}} 
                    src='https://online.pubhtml5.com/hblt/yndn/'  
                    seamless='seamless' scrolling='no' frameborder='0' 
                    allowtransparency='true' allowfullscreen='true' >
                </iframe>
            </div>
        </div>
    )
}
