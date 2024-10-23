import style from './OpenSinger.module.scss'
import {useEffect, useState} from "react";
import AudioPlayer from "../players/audio/AudioPlayer";

function OpenSinger ({man, cover, setMan, active}){


    const [singer, setSinger] = useState('')
    const [pos, setPos] = useState(0)

    const handlerNext = () => {
        if(man.galary && pos<man.galary.length - 1){
            setPos(pos+1)
        }else{
            setPos(0)
        }
    }
    const handlerBack = () => {
        if(man.galary && pos>0){
            setPos(pos-1)
            if(man.galary){setSinger(man.galary[pos])}
        }else{
            setPos(man.galary.length - 1)
        }
    }

    const music = [{
            name: 'Название трека 1',
            autor: 'Исполнитель или группа 1',
            url: '/files/music/music/4.mp3',
            text: ['текст', 'текст', 'текст', 'текст'],
            img: 'files/music/albom/2.jpg'
        }]
    const music2 = [
        {
            name: 'Название трека 4',
            autor: 'Исполнитель или группа 4',
            url: 'files/music/music/4.mp3',
            text: ['текст', 'текст', 'текст', 'текст'],
            img: 'files/music/albom/4.jpg'
        },
        {
            name: 'Название трека 2',
            autor: 'Исполнитель или группа 2',
            url: 'files/music/music/2.mp3',
            text: ['текст', 'текст', 'текст', 'текст'],
            img: 'files/music/albom/2.jpg'
        },
        {
            name: 'Название трека 3',
            autor: 'Исполнитель или группа 3',
            url: 'files/music/music/3.mp3',
            text: ['текст', 'текст', 'текст', 'текст'],
            img: 'files/music/albom/3.jpg'
        },

    ]

    useEffect(() => {
        // Устанавливаем начальное значение singer при монтировании
        if (man.galary && man.galary.length > 0) {
            setSinger(man.galary[0]); // Инициализируем первое изображение
        }
    }, [man]);

    useEffect(() => {
        if (man.galary) {
            setSinger(man.galary[pos]);
        }
    }, [pos, man]);
    return(
        <div className={style.main}>
            <div className={style.left}>
                <div className={style.galary}>
                    <div className={style.up}>
                        <div className={style.leftbtn} onClick={handlerBack}><i className="fa-solid fa-angles-left"/></div>
                        <div className={style.main} style={{backgroundImage: `url('/files/singers/${singer}')`}}></div>
                        <div className={style.rightbtn} onClick={handlerNext}><i className="fa-solid fa-angles-right"/></div>
                    </div>
                    <div className={style.down}>
                        {(man.galary)&&man.galary.map((img, indeximg)=>{
                            if(indeximg<pos+3 && indeximg>=pos){
                                return(
                                    <div className={style.block} ><div className={style.img} onClick={()=>{if(indeximg!=pos){setPos(indeximg)}}} style={(indeximg === pos)?{backgroundImage: `url('/files/singers/${img}')`,boxShadow: '0px 0px 20px rgb(132, 86, 201)'}:{backgroundImage: `url('/files/singers/${img}')`}}></div></div>
                                )
                            }
                        })}
                        {(man.galary)&&man.galary.map((img, indeximg)=>{
                            if(pos === man.galary.length - 2 && indeximg === 0){
                                return(
                                    <div className={style.block} ><div className={style.img} onClick={()=>{if(indeximg!=pos){setPos(indeximg)}}} style={(indeximg === pos)?{backgroundImage: `url('/files/singers/${img}')`,boxShadow: '0px 0px 20px rgb(132, 86, 201)'}:{backgroundImage: `url('/files/singers/${img}')`}}></div></div>
                                )
                            }
                        })}
                        {(man.galary)&&man.galary.map((img, indeximg)=>{
                            if(pos === man.galary.length - 1 && indeximg === 0 || pos === man.galary.length - 1 && indeximg === 1){
                                return(
                                    <div className={style.block} ><div className={style.img} onClick={()=>{if(indeximg!=pos){setPos(indeximg)}}} style={(indeximg === pos)?{backgroundImage: `url('/files/singers/${img}')`,boxShadow: '0px 0px 20px rgb(132, 86, 201)'}:{backgroundImage: `url('/files/singers/${img}')`}}></div></div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.content}>
                    <div className={style.name}>
                        <div className={style.title}>Исполнитель</div>
                        <div className={style.name}>{man.name}</div>
                    </div>
                    <div className={style.desc}>
                        <div className={style.title}>Жанр музыки</div>
                        <div className={style.text}>{(man.style)&&man.style.map((style, indstyle)=>(
                            <div key={indstyle}> {style}{(indstyle===man.style.length-1)?'':', '} </div>
                        ))}</div>
                    </div>
                    {/*<div className={style.desc}>*/}
                    {/*    <div className={style.title}>Личная информация</div>*/}
                    {/*    <div className={style.text}>{man.desc}</div>*/}
                    {/*</div>*/}
                    {/*<div className={style.news}>*/}
                    {/*    <div className={style.title}>Обновления</div>*/}
                    {/*    <div className={style.text}>{man.news}</div>*/}
                    {/*</div>*/}
                    <div className={style.music}>
                        {(man.music.length > 0)&&(
                            <AudioPlayer music={(man.music)?man.music:[{url: ''}]} styleType={'full'} activeman={active}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenSinger