import React, { useState, useEffect, useRef, useContext  } from 'react';
import style from './SingersMobile2.module.scss';
import OpenSinger from "./OpenSinger";
import { DataContext } from '../../context/DataContext';
import BigModal from "../modalwin/BigModal";
import FormBid from "../bid/FormBid";

function SingersMobile2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [sliderVisible, setSliderVisible] = useState(false);
    const [titleVisible, setTitleVisible] = useState(false);
    const [rootMargin, setRootMargin] = useState('0px 0px 500px 0px'); // Устанавливаем rootMargin в зависимости от ширины экрана
    const [wind, setWind] = useState(window.innerWidth);


    const sliderRef = useRef(null);
    const titleRef = useRef(null);
    const {sings} = useContext(DataContext)

    const singers = sings


    let visibleSlides; // Количество видимых слайдов
    let slideWidth; // Ширина одного слайда в пикселях
        slideWidth = 300 // Меньше 500px
        visibleSlides = 1

    const totalSlides = singers.length; // Всего слайдов

    // Изменяем rootMargin в зависимости от ширины экрана
    useEffect(() => {
        const updateRootMargin = () => {
                setRootMargin('0px 0px 500px 0px'); // Больше 500px
        };

        updateRootMargin(); // Устанавливаем значение при монтировании
        window.addEventListener('resize', updateRootMargin); // Добавляем слушатель события

        return () => {
            window.removeEventListener('resize', updateRootMargin); // Убираем слушатель при размонтировании
        };
    }, []);
    useEffect(()=>{
        setWind(window.innerWidth)
    }, [window.innerWidth])
    // Intersection Observer для отслеживания появления блоков
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin, // Используем динамическое значение rootMargin
            threshold: 0.1,
        };

        const sliderObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setSliderVisible(true);
                }
            });
        }, observerOptions);

        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            });
        }, observerOptions);

        if (sliderRef.current) {
            sliderObserver.observe(sliderRef.current);
        }
        if (titleRef.current) {
            titleObserver.observe(titleRef.current);
        }

        return () => {
            if (sliderRef.current) {
                sliderObserver.unobserve(sliderRef.current);
            }
            if (titleRef.current) {
                titleObserver.unobserve(titleRef.current);
            }
        };
    }, [rootMargin]); // Обновляем наблюдателей, если rootMargin изменяется

    // Автоматическое листание
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            handleRightClick();
        }, 3000); // Каждые 3 секунды

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    const [activemodal, setActivemodal] = useState(false);
    const [activeform, setActiveform] = useState(false);
    const [man, setMan] = useState({ music: [{ url: '' }] });

    return (
        <div className={style.main}>
            <BigModal data={<OpenSinger man={man} cover={man.cover} active={activemodal}/>} activemodal={activemodal} setActivemodal={setActivemodal} setData={setMan} />
            <BigModal data={<FormBid setActivemodal={setActiveform} active={activeform}/>} activemodal={activeform} setActivemodal={setActiveform}/>
            <div className={`${style.title}`} ref={titleRef}>
                Артисты
            </div>
            <div
                ref={sliderRef}
                className={`${style.slider} ${sliderVisible ? style.visibleFromBottom : ''}`}
                onMouseEnter={() => setIsPaused(true)} // Останавливаем автоперелистывание при наведении
                onMouseLeave={() => setIsPaused(false)} // Возвращаем автоперелистывание при уходе мышки
            >
                <div className={style.listblock}>
                    <div
                        className={style.slidesContainer}
                        style={{
                            transform: `translateX(-${currentIndex * (slideWidth + 20)}px)`, // Смещение слайдов
                            transition: 'transform 0.5s ease', // Плавное перелистывание
                            width: `${totalSlides * (slideWidth + 10)}px`, // Общая ширина контейнера
                        }}
                    >
                        {singers.map((singer, i) => (
                            <div className={style.singer} key={i} style={{ width: `${slideWidth}px` }} onClick={() => { setActivemodal(true); setMan(singer); }}>
                                <div
                                    className={style.cover}
                                    style={{ backgroundImage: `url('/files/singers/${singer.cover}')` }}
                                ></div>
                                <div className={style.name}>{singer.name}</div>
                            </div>
                        ))}
                        {/*<div className={style.more}>Здесь можешь быть ты</div>*/}
                    </div>
                </div>
                <div className={style.tumbler}>
                    <div className={style.left} onClick={handleLeftClick}>
                        <i className="fa-solid fa-angles-left"></i>
                    </div>
                    <div className={style.right} onClick={handleRightClick}>
                        <i className="fa-solid fa-angles-right"></i>
                    </div>
                </div>
            </div>
            <div className={style.bid}>
                <div className={style.text}>В этом списке можешь быть и ты, присылай нам свое демо!</div>
                <div className={style.btn} onClick={() => setActiveform(true)}>Отправить</div>
            </div>
        </div>
    );
}

export default SingersMobile2;