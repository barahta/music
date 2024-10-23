import style from './AboutBlock.module.scss'

function AboutBlock(){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.blockabout}>
                    <div className={style.left}>
                        <div className={style.block}>
                            <div className={style.title}>О нас</div>
                            <div className={style.desc}>OMEDIA!  музыка  -  лейбл,  созданный  для  продвижения  творчества  исполнителей.  Мы ориентируемся на поиске талантливых исполнителей и раскрываем потенциал каждого намаксимум   для   продвижения   их   на   территории   РФ.   В   дистрибуцию   идут   авторские материалы вне зависимости от стиля и жанра: современная музыка, электронная музыка,фолк, классика, неоклассика и многие другие.Сейчас   мы   набираем   команду   исполнителей   и   готовы   поддержать   новые   лица   в   миремузыки. Самое главное для нас – звук и удовольствие слушателей</div>
                        </div>
                    </div>
                    <div className={style.right}>
                        <img src="/files/music/station.svg" className={style.imgicon}/>
                    </div>
                </div>
                <div className={style.blockabout}>
                    <div className={style.left}>
                        <img src="/files/music/heart.svg" className={style.imgicon}/>
                    </div>
                    <div className={style.right}>
                        <div className={style.block}>
                                <div className={style.title}>Почему Мы?</div>
                                <div className={style.desc}>Музыкальный лейбл "OMEDIA! Музыка" предлагает уникальные возможности для продвижения ваших проектов. В распоряжении лейбла — мощные медиа-ресурсы, включая пять радиостанций, собственный телеканал и многочисленные цифровые площадки. Это позволяет нам эффективно доносить вашу музыку до широкой аудитории и обеспечивать постоянную ротацию на ведущих платформах. Мы создаем не только музыку, но и историю успеха для каждого нашего артиста, используя все доступные медиа-каналы для вашего продвижения.</div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBlock