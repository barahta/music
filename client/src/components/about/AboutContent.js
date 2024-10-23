import style from './AboutContent.module.scss'

function AboutContent(){
    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.alone}>
                    <div className={style.blockabout}>
                        <div className={style.up}>
                            <div className={style.title}>О лейбле</div>
                        </div>
                        <div className={style.bot}>
                            <div className={style.block}>
                                <div className={style.desc}>Музыкальный лейбл «OMEDIA! музыка» появился в 2024 году как альтернатива для талантливых исполнителей из регионов. Мы готовы показывать, что заниматься музыкой и продвигать себя, можно не выезжая в столицу. Для этого мы строим целую цифровую экосистему сервисов поддержки и даём возможность записываться из любой точки страны. Наша команда поддерживает творческие эксперименты совершенно в разных стилях, помогая усовершенствовать ваши наработки и находя своих слушателей.</div>
                                <div className={style.desc}>Звучи громче вместе с OMEDIA!</div>
                            </div>
                        </div>
                    </div>
                    <div className={style.imgs}>

                        <img src="/files/icons/note2.svg" className={style.two}/>
                        <img src="/files/icons/note1.svg" className={style.one}/>
                    </div>
                </div>
                <div className={style.scopes}>
                    <div className={style.name}>ОСНОВНЫЕ НАПРАВЛЕНИЯ</div>
                    <div className={style.points}>
                        <div className={`${style.bidscheck} ${style.lab1}`}>Лицензирование музыкального и видео-контента</div>
                        <div className={`${style.bidscheck} ${style.lab2}`}>Менеджмент и продвижение исполнителей</div>
                        <div className={`${style.bidscheck} ${style.lab3}`}>Реклама и PR сопровождение </div>
                        <div className={`${style.bidscheck} ${style.lab4}`}>Организация концертов и музыкальных фестивалей</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent