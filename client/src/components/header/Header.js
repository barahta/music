import style from './Header.module.scss'

function Header (){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.backmain}></div>
                <div className={style.content}>
                    <div className={style.nav}>
                        <div className={style.linker}>
                            <div className={style.link}>HOME</div>
                            <div className={style.link}>ABOUT</div>
                            <div className={style.link}>COURSES</div>
                            <div className={style.link}>BLOG</div>
                            <div className={style.link}>SING IN</div>
                        </div>
                        <div className={style.burger}>
                            <div className={style.box}>
                                <div className={style.slash}></div>
                                <div className={style.slash}></div>
                                <div className={style.slash}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.logos}>
                        <img src="/files/omedia.svg" className={style.omedialogo}/>
                        <img src="/files/omediamusic.svg" className={style.musiclogo}/>
                    </div>
                    <div className={style.title}>Поиск новых артистов. Продвижение молодых талантов</div>
                </div>
            </div>
        </div>
    )
}

export default Header