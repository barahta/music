import style from './AboutMain.module.scss'

function AboutMain(){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.blockabout}>
                    <div className={style.right}>
                        <div className={style.title}>О лейбле</div>
                    </div>
                    <div className={style.left}>
                        <div className={style.block}>
                            <div className={style.desc}>OMEDIA! музыка - лейбл, созданный для продвижения творчества талантливых исполнителей и раскрытия потенциала каждого на максимум. В дистрибуцию идут авторские материалы вне зависимости от стиля и жанра: современная музыка, электронная музыка, фолк, классика, неоклассика и другие.</div>
                            <div className={style.desc}>Сейчас мы набираем команду исполнителей и готовы поддержать новые лица в мире музыки. Самое главное для нас – качественный звук и удовольствие слушателей.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMain