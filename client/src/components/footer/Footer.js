import style from './Footer.module.scss'

function FooterBlock (){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.nav}>
                        <div className={style.title}>About</div>
                        <div className={style.line}>History</div>
                        <div className={style.line}>Our Team</div>
                        <div className={style.line}>Mission Statement</div>
                        <div className={style.line}>Terms & Condition</div>
                        <div className={style.line}>Privacy Policy</div>
                    </div>
                    {/*<div className={style.nav}>*/}
                    {/*    <div className={style.title}>What we do</div>*/}
                    {/*    <div className={style.line}>Newsand stories</div>*/}
                    {/*    <div className={style.line}>Publications</div>*/}
                    {/*    <div className={style.line}>Take action</div>*/}
                    {/*    <div className={style.line}>Recomendation</div>*/}
                    {/*    <div className={style.line}>Help</div>*/}
                    {/*</div>*/}
                </div>
                <div className={style.follow}>
                    <div className={style.title}>Sign Up To Receive</div>
                    <div className={style.title}>____ Our Newsletter</div>
                    <div className={style.form}>
                        <input type="email" placeholder="Ваш Email"/>
                        <div className={style.btn}><i className="fa-solid fa-check"/></div>
                    </div>
                    <div className={style.us}>
                        <div className={style.title}>Follow us!</div>
                        <div className={style.icons}>
                            <i className="fa-brands fa-vk"/>
                            <i className="fa-brands fa-telegram"/>
                            <i className="fa-brands fa-square-instagram"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBlock