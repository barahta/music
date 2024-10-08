import style from './styles/Main.module.scss'
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Header from '../components/header/Header'
import Singers from "../components/singers/Singers";
import FooterBlock from "../components/footer/Footer";

function Main () {


    return (
        <div className={style.bodymain}>
            <Header />
            <div className={style.main}>
                <div className={style.container}>
                    <Singers />
                </div>
            </div>
            <FooterBlock />
        </div>
    )
}

export default Main