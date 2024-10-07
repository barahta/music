import style from './Singers.module.scss'



function Singers (){


    const singers = [
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        },
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        },
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        },
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        },
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        },
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        },
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        },
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        },
        {
            name: 'Фамилия Имя',
            cover: 'artist.png',
            music: '1.mp3'
        }
    ]

    return(
        <div className={style.main}>
            <div className={style.title}>Артисты</div>
            <div className={style.slider}>
                <div className={style.listblock}>
                    {singers.map((singer, index)=>(
                        <div className={style.singer}>
                            <div className={style.cover} style={{backgroundImage: `url('/files/music/${singer.cover}')`}}>
                                <i className="fa-solid fa-play"></i>
                            </div>
                            <div className={style.name}>{singer.name}</div>
                        </div>
                    ))}

                </div>
                <div className={style.tumbler}>
                    <div className={style.left}><i className="fa-solid fa-angles-left"></i></div>
                    <div className={style.right}><i className="fa-solid fa-angles-right"></i></div>
                </div>
            </div>
        </div>
    )
}

export default Singers