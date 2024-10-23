import React, { useState, useRef, useEffect } from 'react';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './LightPlayer.module.scss';

const LightPlayer = ({ music }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackProgress, setTrackProgress] = useState(0);
    const audioRef = useRef(null);

    // Время прогресса трека
    const updateProgress = () => {
        if (audioRef.current) {
            setTrackProgress(audioRef.current.currentTime);
        }
    };

    // Воспроизведение/пауза
    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying); // Меняем состояние
    };

    // Когда трек заканчивается
    const onAudioEnded = () => {
        setIsPlaying(false); // Останавливаем проигрывание
    };

    // Промотка таймлайна вручную
    const handleTimelineChange = (e) => {
        audioRef.current.currentTime = e.target.value;
        setTrackProgress(e.target.value);
    };

    useEffect(() => {
        const currentAudio = audioRef.current;
        if (currentAudio) {
            currentAudio.addEventListener('timeupdate', updateProgress);
            return () => {
                currentAudio.removeEventListener('timeupdate', updateProgress);
            };
        }
    }, []);

    return (
        <div className={style.player}>
            <div className={style.trackInfo}>
                <img src={music.img} alt={music.name} className={style.trackImage} />
                <div>
                    <div className={style.trackName}>{music.name}</div>
                    <div className={style.trackAutor}>{music.autor}</div>
                </div>
            </div>

            <audio
                ref={audioRef}
                src={music.url}
                onEnded={onAudioEnded}
            ></audio>

            <div className={style.controls}>
                <button className={style.controlButton} onClick={() => audioRef.current.currentTime -= 10}>
                    <FontAwesomeIcon icon={faBackward} />
                </button>
                <button className={style.controlButton} onClick={playPauseHandler}>
                    {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </button>
                <button className={style.controlButton} onClick={() => audioRef.current.currentTime += 10}>
                    <FontAwesomeIcon icon={faForward} />
                </button>
            </div>

            <div className={style.timeline}>
                <input
                    type="range"
                    min="0"
                    max={audioRef.current ? audioRef.current.duration : 0}
                    value={trackProgress}
                    onChange={handleTimelineChange}
                    className={style.timelineRange}
                />
            </div>
        </div>
    );
};

export default LightPlayer;