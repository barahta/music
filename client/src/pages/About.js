import style from './styles/Main.module.scss'
import SmallHeader from "../components/header/SmallHeader"
import SmallFooter from "../components/footer/SmallFooter"
import AboutContent from "../components/about/AboutContent"

function About () {


    return (
        <div className={style.bodymain}>
            <SmallHeader />
            <div className={style.main}>
                <div className={style.container}>
                    <AboutContent /> />
                </div>
            </div>
            {/*<FooterBlock />*/}
            <SmallFooter />
        </div>
    )
}

export default About