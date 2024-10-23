import { useEffect, useState, useRef } from 'react';
import style from './Scope.module.scss';

function Scope() {
    const [visibleItems, setVisibleItems] = useState([]);
    const refs = useRef([]);

    const letters = [
        {
            text: 'Поможем написать текст для будущего хита, разработаем бит и аранжировку, запишем трек в собственной студии',
            possition: true,
            icon: 'nota.svg'
        },
        {
            text: 'Подготовим план релизов и выпустим твои треки на самых популярных площадках: VK music, Yandex music, ЗВУК и другие',
            possition: false,
            icon: 'equalizer.svg'
        },
        {
            text: 'Командой создадим тебе образ, сделаем фотосессию, снимем вместе ВК клипы, запустим рекламу,   разработаем   контент-план   для   социальных   сетей,   опубликуем   на   цифровых площадках твои песни, организуем живое выступление',
            possition: true,
            icon: 'wifi.svg'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleItems((prevItems) => [...prevItems, entry.target.dataset.index]);
                }
            });
        }, {
            root: null,
            rootMargin: '0px 0px -100px 0px',
            threshold: 0.1
        });

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            refs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className={style.main}>
            <div className={style.title}>
                <div className={style.text}>Возможности</div>
            </div>
            <div className={style.messages}>
                {letters.map((mess, imess) => {
                    const isVisible = visibleItems.includes(imess.toString());
                    return (
                        <div
                            key={imess}
                            data-index={imess}
                            ref={(el) => (refs.current[imess] = el)}
                            className={`${style.line} ${isVisible ? (mess.possition ? style.fromRight : style.fromLeft) : ''}`}
                        >
                            {mess.possition ? (
                                <>
                                    <div className={style.icon}>
                                        <img src={`/files/music/${mess.icon}`} alt="icon" />
                                    </div>
                                    <div className={style.textright}>{mess.text}</div>
                                </>
                            ) : (
                                <>
                                    <div className={style.textleft}>{mess.text}</div>
                                    <div className={style.icon}>
                                        <img src={`/files/music/${mess.icon}`} alt="icon" />
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Scope;