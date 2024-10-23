import style from './NewBid.module.scss'
import {useMessage} from "../../hooks/message.hook";
import {useState} from "react";
import BigModal from "../modalwin/BigModal";
import FormBid from "./FormBid";

function NewBid (){

    const [activemodal,setActivemodal] = useState(false)

    return(
        <div className={style.main} style={{backgroundImage: `url('/files/music/sendback.png')`}}>
            <BigModal data={<FormBid setActivemodal={setActivemodal} active={activemodal}/>} activemodal={activemodal} setActivemodal={setActivemodal}/>
            <div className={style.back}></div>
            <div className={style.right}>
                <div className={style.title}>Отправить демо</div>
                <div className={style.desc}>Мы в поиске талантливых молодых артистов, готовых на долгосрочное сотрудничество</div>
                <div className={style.form}>

                    <div className={style.btn} onClick={()=>{setActivemodal(true)}}>Отправить демо</div>
                </div>
            </div>
            <div className={style.left}>
                {/*<img src="/files/music/video.svg"/>*/}
                {/*<img src="/files/music/nota.svg"/>*/}
                {/*<img src="/files/music/heart.svg"/>*/}
            </div>
        </div>
    )
}

export default NewBid