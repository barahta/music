import style from './styles/Main.module.scss'
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function Main () {


    return (
        <div className={style.bodymain}>
            <div className={style.container}>
                <div className={style.title}>
                    <img src="/files/tooth.svg" className={style.tooth}/>
                    <div className={style.left}>LOGOTYPE</div>
                    <div className={style.right}>MONSTER</div>
                </div>
                <div className={style.engtitle}>
                    <div className={style.text}>
                        <div className={style.line}>LOGO</div>
                        <div className={style.linedown}>Design</div>
                    </div>
                    <div className={style.logo}>
                        <img src="/files/monster.svg" alt=""/>
                    </div>
                </div>
                <div className={style.rutitle}>СДЕЛАЮ ЛОГОТИП</div>
                <div className={style.more}>
                    <div className={style.btn}>Подробнее</div>
                </div>
                <div className={style.portfolio}>
                    <div className={style.eng}>PORTFOLIO</div>
                    <div className={style.rus}>ПОРТФОЛИО</div>
                </div>
            </div>
        </div>
    )
}

export default Main