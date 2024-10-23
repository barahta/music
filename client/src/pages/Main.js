import style from './styles/Main.module.scss'
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Header from '../components/header/Header'
import Singers from "../components/singers/Singers";
import FooterBlock from "../components/footer/Footer";
import Scope from "../components/scope/Scope";
import Bid from "../components/bid/Bid";
import AboutMain from "../components/about/AboutMain";
import NewBid from "../components/bid/NewBid";
import SingersMobile from "../components/singers/SingersMobile";
import SmallFooter from "../components/footer/SmallFooter";
import SingersMobile2 from "../components/singers/SingersMobile2";

function Main () {


    return (
        <div className={style.bodymain}>
            <Header />
            <div className={style.main}>
                <div className={style.container}>
                    <AboutMain />
                    <Singers />
                    <SingersMobile />
                    <SingersMobile2 />
                    <Scope />
                    <NewBid />
                </div>
            </div>
            {/*<FooterBlock />*/}
            <SmallFooter />
        </div>
    )
}

export default Main