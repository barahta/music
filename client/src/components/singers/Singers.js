import React, { useState, useEffect } from 'react';
import style from './Singers.module.scss';

function Singers() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const singers = [
        { name: 'Фамилия Имя', cover: '1.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '4.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '8.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '2.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '5.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '6.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '7.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '3.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '15.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '12.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '11.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '10.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '13.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '14.webp', music: '1.mp3' },
        { name: 'Фамилия Имя', cover: '9.webp', music: '1.mp3' },
    ];

    const visibleSlides = 3; // Количество видимых слайдов
    const slideWidth = 400; // Ширина одного слайда в пикселях, корректируем ширину
    const totalSlides = singers.length; // Всего слайдов

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

    return (
        <div className={style.main}>
            <div className={style.title}>Артисты</div>
            <div
                className={style.slider}
                onMouseEnter={() => setIsPaused(true)} // Останавливаем автоперелистывание при наведении
                onMouseLeave={() => setIsPaused(false)} // Возвращаем автоперелистывание при уходе мышки
            >
                <div className={style.listblock}>
                    <div
                        className={style.slidesContainer}
                        style={{
                            transform: `translateX(-${currentIndex * (slideWidth + 130)}px)`, // Смещение слайдов
                            transition: 'transform 0.5s ease', // Плавное перелистывание
                            width: `${totalSlides * (slideWidth + 50)}px`, // Общая ширина контейнера
                        }}
                    >
                        {singers.map((singer, i) => (
                            <div className={style.singer} key={i} style={{ width: `${slideWidth}px` }}>
                                <div
                                    className={style.cover}
                                    style={{ backgroundImage: `url('/files/music/${singer.cover}')` }}
                                >
                                    <i className="fa-solid fa-play"></i>
                                </div>
                                <div className={style.name}>{singer.name}</div>
                            </div>
                        ))}
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
        </div>
    );
}

export default Singers;