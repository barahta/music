import style from './Header.module.scss'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Header (){

    const [openburger, setOpenburger] = useState(false)



    useEffect(() => {
        window.scrollTo(0, 0);
        if(openburger===true){
            document.body.style.position = 'fixed'
            document.body.style.top = '0px'
            document.body.style.left = '0px'
            document.body.style.width = '100%'
        }else{
            document.body.style.position = 'relative'
            document.body.style.top = '0px'
        }
    }, [openburger]);

    return(
        <div className={style.main}>
            <div className={style.menumobile} style={(openburger)?{maxHeight:'100%', opacity: '1', marginTop: '0px', display:'flex'}:{}}>

                <div className={style.rightpart}>
                    <div className={style.board}>
                        <Link to="/about" className={`${style.btn} ${style.left} ${style.down}`}>О НАС<div className={style.border}></div>
                        </Link>
                        {/*<div className={style.btn}>О нас<div className={style.border}></div></div>*/}
                        <Link to='/singers' className={`${style.btn} ${style.right} ${style.down}`}>АРТИСТЫ<div className={style.border}></div></Link>
                        <Link to='/gallery' className={`${style.btn} ${style.left}`}>ГАЛЕРЕЯ<div className={style.border}></div></Link>
                        <Link to='/scope' className={`${style.btn} ${style.right}`}>ВОЗМОЖНОСТИ<div className={style.border}></div></Link>

                        {/*<Link to='/vakansii' className={`${style.btn} ${style.right}`}>Вакансии<div className={style.border}></div></Link>*/}
                    </div>
                </div>
                <div className={style.up}></div>
            </div>
            <div className={style.container}>
                <div className={style.backmain}></div>
                <div className={style.content}>
                    <div className={style.nav}>
                        <div className={style.linker}>
                            <Link to='/about' className={style.link}>О НАС</Link>
                            <Link to='/singers' className={style.link}>АРТИСТЫ</Link>
                            <Link to='/gallery' className={style.link}>ГАЛЕРЕЯ</Link>
                            <Link to='/scope' className={style.link}>ВОЗМОЖНОСТИ</Link>
                            {/*<Link to='/about' className={style.link}>BLOG</Link>*/}
                        </div>
                        <div className={style.burger}>
                            <div className={style.box} onClick={()=>setOpenburger(!openburger)}>
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
                    <div className={style.title}>ПРОДВИЖЕНИЕ НОВЫХ ИСПОЛНИТЕЛЕЙ. ЗВУЧИ ГРОМЧЕ С OMEDIA!</div>
                </div>
            </div>
        </div>
    )
}

export default Header