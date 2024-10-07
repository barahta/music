import style from './styles/Main.module.scss'
import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Header from '../components/header/Header'
import Singers from "../components/singers/Singers";


function Main () {


    return (
        <div className={style.bodymain}>
            <Header />
            <div className={style.main}>
                <div className={style.container}>
                    <Singers />
                </div>
            </div>
        </div>
    )
}

export default Main