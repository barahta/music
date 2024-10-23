import style from './Bid.module.scss'
import {useMessage} from "../../hooks/message.hook";
import {useState} from "react";

function Bid (){

    const [name, setName] = useState('')
    const [social, setSocial] = useState('')
    const [fileURL, setFileURL] = useState('')
    const [phone, setPhone] = useState('')
    const message = useMessage();
    const sendLetter = () => {
        message(`${name}, спасибо за обращение, Ваша заявка принята и будет рассмотрена`)
    }

    return(
        <div className={style.main}>
            <div className={style.right}>
                <div className={style.title}>Подать заявку</div>
                <div className={style.pre}>чтобы попасть в OMEDIA! Музыка</div>
                <div className={style.desc}>Рассматриваются заявки только с аудио или видео презентацией. Заполните все поля формы</div>
                <div className={style.form}>
                    <input type="text" placeholder="Ваше Имя" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input type="text" placeholder="Ссылка на соц.сеть" value={social} onChange={(e)=>setSocial(e.target.value)}/>
                    <input type="text" placeholder="Ссылка на видео или аудио" value={fileURL} onChange={(e)=>setFileURL(e.target.value)}/>
                    <input type="text" placeholder="Номер телефона" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    <div className={style.btn} onClick={sendLetter}>Отправить</div>
                </div>
            </div>
            <div className={style.left}>
                <img src="/files/music/video.svg"/>
                <img src="/files/music/nota.svg"/>
                <img src="/files/music/heart.svg"/>
            </div>
        </div>
    )
}

export default Bid