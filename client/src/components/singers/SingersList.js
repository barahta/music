import style from './SingersList.module.scss'
import {useContext} from "react";
import {DataContext} from "../../context/DataContext";
import {Link} from "react-router-dom";
import AudioPlayer from "../players/audio/AudioPlayer";
import AudioStoper from "../players/audio/AudioStoper";

function SingersList(){

    const {sings} = useContext(DataContext)

    const singers = sings
    const companies = [
        {
            name: 'LESKIN',
            url: 'https://vk.com',
            img: 'aviatech.svg',
            desc: 'POP',
            phone: '+7 (3433) 63-97-60',
            email: 'mail@airtechs.ru',
            aplication: '1.png',
            adress: ''
        },
        {
            name: 'Крестьянско-фермерское хозяйство «РеаФарм»',
            url: 'https://vk.com',
            img: 'reafarm.svg',
            desc: 'Микроклональное копирование семян, выращивание салатного листа, микрозелени, лекарственных растений и других культур. Производство, переработка, хранение, транспортировка и реализация сельскохозяйственной продукции.',
            phone: '+7 (3462) 51-13-98',
            email: '',
            aplication: '2.png',
            adress: ''
        },
        {
            name: 'Телерадиокомпания «Сургутинтерновости»',
            url: 'https://vk.com',
            img: '24surgut.svg',
            desc: 'Информационные, просветительские, развлекательные программы, документальные фильмы, интервью на самые злободневные темы семь дней в неделю. В распоряжении съемочных групп новейшее оборудование, которое позволяет снимать в режиме высокой четкости при любой погоде. Наши специалисты — многократные победители конкурсов профессионального мастерства всех уровней — от местного до международного. СИН – это два телеканала, один из которых – окружной собственного программирования «Сургут 24», шесть радиостанций, сайт и множество площадок в социальных сетях.',
            phone: '+7 (3462) 22-12-12',
            email: 'news@in-news.ru',
            aplication: '3.png'
        },
        {
            name: 'Центр детского творчества «Hope Kids»',
            url: 'https://vk.com',
            img: 'hopekids.svg',
            desc: 'Большое пространство, включающее в себя лабиринты, игровые комнаты, интерактивные зоны и зоны мастер-классов для детей, а также бар с детскими напитками и едой. На каникулах на базе центра организован детский лагерь.',
            phone: '+7 (3462) 51‒11‒72',
            email: '',
            aplication: '4.png',
            adress: ''
        },
        {
            name: 'Фитнес-центр «Hope Fitness»',
            url: 'https://vk.com',
            img: 'hopefitness.svg',
            desc: 'Круглосуточный фитнес-центр, который предлагает возможность заниматься спортом всей семьей. Инновационное оборудование, высококвалифицированные тренеры, большой выбор групповых программ. В то же время это не только место для занятий спортом – здесь можно отлично отдохнуть и расслабиться после трудного дня в зоне СПА: хамам, финская парная и комната с гималайской солью, услуги массажа и маникюра.',
            phone: '+7 (3462) 51-11-45',
            email: 'info@hopefitness.ru',
            aplication: '5.png',
            adress: ''
        },
        {
            name: 'THEKITCHA',
            url: 'https://vk.com',
            img: 'thekitcha.svg',
            desc: 'Здесь вы можете окунуться в мир гастрономических удовольствий. Просто закажите доставку, а мы сделаем все остальное. Кстати, ни на что не намекаем, но мы закрепили меню в документах группы. Все для вашего удобства! А для тех, кто жаждет приключений, мы всегда готовы забронировать стол по номеру: 50-02-07. Если вы искали место для уютных встреч со вкусными блюдами, то мы ждём вас!',
            phone: '+7 (3462) 50-02-07',
            email: 'улица Энгельса, 15, Сургут',
            aplication: '6.jpeg',
            adress: ''
        },
        {
            name: 'Благотворительный фонд «Траектория надежды»',
            url: 'https://vk.com',
            img: 'traektoriya.svg',
            desc: 'Оказание помощи и поддержки нуждающимся. Привлечение адресных и целевых пожертвований, направленных на комплексное решение различных социальных проблем, а также реализация и поддержка культурных, образовательных и других общественно полезных целей.',
            phone: '+7 (3462) 51-11-80',
            email: 'mail@tnfond.ru',
            aplication: '7.png',
            adress: ''
        },
        {
            name: 'Общественная организация помощи бездомным животным «Верный друг»',
            url: 'https://vk.com',
            img: 'verniydrug.svg',
            desc: 'Центр временной передержки животных. Лечение, кормление, содержание бездомных собак, взятых под опеку. Сокращение числа уличных собак путем их стерилизации. Строительство утепленных вольеров, поиск новых хозяев для подопечных.',
            phone: '+7 (922) 652-77-04',
            email: 'zhereb74@mail.ru',
            aplication: '8.png',
            adress: ''
        },

    ]
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
    return (
        <div className={style.companies}>
            <div className={style.maintitle}>Артисты</div>
            {singers.map((com, index)=>(
                <div className={style.firm}>
                    <div className={style.ontheleft} style={{backgroundImage: `url('/files/singers/${com.cover}')`}}></div>
                    <div className={style.ontheright}>
                        <div className={style.upper}>
                            <div className={style.titlename}>
                                <label className={style.nameman}>{com.name}</label>
                                {com.style.map((stl, indexstl)=>(
                                    <label key={indexstl} className={style.tik}>{stl}</label>
                                ))}

                            </div>
                            <div className={style.strim}>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.ya:''} className={style.link} style={(com.striming.ya.length>0)?{}:{display: 'none'}}><img src="/files/icons/yandex.svg" alt=""/><label>Яндекс Музыка</label></Link>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.vk:''} className={style.link} style={(com.striming.vk.length>0)?{}:{display: 'none'}}><img src="/files/icons/vk.svg" alt=""/><label>VK Музыка</label></Link>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.apple:''} className={style.link} style={(com.striming.apple.length>0)?{}:{display: 'none'}}><img src="/files/icons/apple.svg" alt=""/><label>Apple Music</label></Link>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.mts:''} className={style.link} style={(com.striming.mts.length>0)?{}:{display: 'none'}}><img src="/files/icons/mts.svg" alt=""/><label>MTS Музыка</label></Link>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.zvuk:''} className={style.link} style={(com.striming.zvuk.length>0)?{}:{display: 'none'}}><img src="/files/icons/zvuk.svg" alt=""/><label>Zvuk</label></Link>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.spotify:''} className={style.link} style={(com.striming.spotify.length>0)?{}:{display: 'none'}}><img src="/files/icons/spotify.svg" alt=""/><label>Spotify</label></Link>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.itunes:''} className={style.link} style={(com.striming.itunes.length>0)?{}:{display: 'none'}}><img src="/files/icons/itunes.svg" alt=""/><label>iTunse</label></Link>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.ok:''} className={style.link} style={(com.striming.ok.length>0)?{}:{display: 'none'}}><img src="/files/icons/ok.svg" alt=""/><label>Ok Музыка</label></Link>
                                <Link target="_blank" rel="noopener noreferrer" to={(com.striming.ya.length>0)?com.striming.dezeer:''} className={style.link} style={(com.striming.dezeer.length>0)?{}:{display: 'none'}}><img src="/files/icons/dezeer.svg" alt=""/><label>Dezeer</label></Link>
                            </div>
                            <div className={style.descript}>{com.desc}</div>
                        </div>

                    </div>
                    <div className={style.music}>
                        {(com.music.length > 0)&&(
                            <AudioStoper music={(com.music)?com.music:[{url: ''}]} styleType={'full'} activeman={'stop'}/>
                        )}


                    </div>
                </div>
            ))}
        </div>
    )
}

export default SingersList