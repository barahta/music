import React, { useState, useRef, useEffect } from 'react';
import style from './AudioPlayer.module.scss';
import {useAudio} from "../../../hooks/AudioContext";

const AudioStoper = ({ music, styleType,activeman }) => {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false); // Изначальное состояние isPlaying - false
    const [trackProgress, setTrackProgress] = useState(0);
    const audioRef = useRef(null);
    const { activePlayer, setActive } = useAudio(); // Контекст для синхронизации всех плееров

    const currentTrack = music[currentTrackIndex];

    // Обновляем прогресс трека
    const updateProgress = () => {
        if (audioRef.current) {
            setTrackProgress(audioRef.current.currentTime);
        }
    };
    const [thisTrack, setThisTrack] = useState(currentTrack)
    // Функция для обработки play/pause и синхронизации
    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            setActive(audioRef.current); // Устанавливаем активный плеер
            setThisTrack(music[currentTrackIndex])
            audioRef.current.play().catch((error) => {
                console.error("Autoplay prevented. User interaction required.", error);
            });
        }
        setIsPlaying(!isPlaying); // Меняем состояние на противоположное
    };

    // При переключении на другой трек трек автоматически начинает воспроизводиться
    useEffect(() => {
        audioRef.current.load();  // Загружаем трек
        setTrackProgress(0); // Сбрасываем прогресс трека
    }, [currentTrackIndex]);

    useEffect(() => {
        audioRef.current.load();  // Загружаем трек
        setIsPlaying(false); // Устанавливаем состояние воспроизведения на паузу
        setTrackProgress(0); // Сбрасываем прогресс трека
    }, []);

    // Синхронизация состояния с активным плеером
    useEffect(() => {
        if (activePlayer && activePlayer !== audioRef.current) {
            setIsPlaying(false); // Если текущий плеер не активен, его кнопка должна стать Play
        }
    }, [activePlayer]);

    // Обновляем состояние кнопки play/pause, когда трек заканчивается
    const onAudioEnded = () => {
        if (currentTrackIndex < music.length - 1) {
            setCurrentTrackIndex((prevIndex) => prevIndex + 1);
        } else {
            setIsPlaying(false); // Останавливаем проигрывание на последнем треке
        }
    };

    const handleTimelineChange = (e) => {
        audioRef.current.currentTime = e.target.value;
        setTrackProgress(e.target.value);
    };


    // Полный плеер (full)
    const FullPlayer = () => (

        <div className={style.full}>
            <div className={style.fullplayer}>
                <div className={style.fullplayerleft}>
                    <div className={style.fullplayerup}>
                        <div className={style.title}><div className={style.text}>{currentTrack.name}</div></div>
                        <div className={style.startstop}>
                            {/*<i className="fa-solid fa-shuffle"/>*/}
                            <i className="fa-solid fa-backward" onClick={() => {setCurrentTrackIndex(prevIndex => (prevIndex === 0 ? music.length - 1 : prevIndex - 1)); }}/>
                            {(isPlaying)?(<i className="fa-solid fa-pause" onClick={playPauseHandler}/>):(<i className="fa-solid fa-play" onClick={playPauseHandler}/>)}
                            <i className="fa-solid fa-forward" onClick={() => {setCurrentTrackIndex(prevIndex => (prevIndex + 1) % music.length); }}/>
                            <div className={style.equalizer}>
                                <div className={(isPlaying)?`${style.one} ${style.oneactive}`:`${style.one}`}></div>
                                <div className={(isPlaying)?`${style.two} ${style.twoactive}`:`${style.two}`}></div>
                                <div className={(isPlaying)?`${style.three} ${style.threeactive}`:`${style.three}`}></div>
                                <div className={(isPlaying)?`${style.four} ${style.fouractive}`:`${style.four}`}></div>
                                <div className={(isPlaying)?`${style.five} ${style.fiveactive}`:`${style.five}`}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style.timeline}>
                        <input
                            type="range"
                            min="0"
                            max={audioRef.current ? audioRef.current.duration : 0}
                            value={trackProgress}
                            onChange={handleTimelineChange}
                        />
                    </div>
                </div>

            </div>
        </div>

    );

    return (
        <div style={{width: '100%'}}>
            <audio
                ref={audioRef}
                src={currentTrack.url}
                onEnded={onAudioEnded}
                onTimeUpdate={updateProgress}
            ></audio>
            {styleType === 'full' && <FullPlayer />}
        </div>
    );
};

export default AudioStoper;