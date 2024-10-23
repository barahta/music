import style from './styles/Main.module.scss'
import FooterBlock from "../components/footer/Footer";
import SmallHeader from "../components/header/SmallHeader";
import AboutBlock from "../components/about/AboutBlock";
import SmallFooter from "../components/footer/SmallFooter";
import SingersList from "../components/singers/SingersList";

function SingersPage () {


    return (
        <div className={style.bodymain}>
            <SmallHeader />
            <div className={style.main}>
                <div className={style.container}>
                    <SingersList />
                </div>
            </div>
            <SmallFooter/>
        </div>
    )
}

export default SingersPage

