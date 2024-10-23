import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const AudioContext = createContext();

// Компонент провайдера контекста
export const AudioProvider = ({ children }) => {
    const [activePlayer, setActivePlayer] = useState(null);

    const setActive = (playerRef) => {
        // Если есть активный плеер, ставим его на паузу
        if (activePlayer && activePlayer !== playerRef) {
            activePlayer.pause();
        }
        // Устанавливаем новый активный плеер
        setActivePlayer(playerRef);
    };

    return (
        <AudioContext.Provider value={{ activePlayer, setActive }}>
            {children}
        </AudioContext.Provider>
    );
};

// Хук для использования контекста
export const useAudio = () => useContext(AudioContext);