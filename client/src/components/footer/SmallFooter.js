import style from './SmallFooter.module.scss'
import {Link} from "react-router-dom";

function SmallFooter (){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.nav}>
                        <Link to='/about' className={style.line}>О нас</Link>
                        <Link to='/singers' className={style.line}>Артисты</Link>
                        <Link to='/scope' className={style.line}>Возможности</Link>
                    </div>
                </div>
                <div className={style.follow}>
                        <div className={style.title}>Подпишись</div>
                        <div className={style.icons}>
                            <Link target="_blank" rel="noopener noreferrer" to='https://vk.com/omediamusic'><i className="fa-brands fa-vk"/></Link>
                            {/*<i className="fa-brands fa-telegram"/>*/}
                            {/*<i className="fa-brands fa-square-instagram"/>*/}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SmallFooter