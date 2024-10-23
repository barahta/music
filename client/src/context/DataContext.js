import React, { createContext, useState } from 'react';
import {ToastContainer} from "react-toastify";

export const DataContext = createContext('')

export const DataProvider = ({ children }) => {
        const getMonthName = (monthIndex) => {
        const monthNames = [
            "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ];
        return monthNames[monthIndex];
    }
    const optionsYear = [
        { value: '0', label: '2022' },
        { value: '1', label: '2023' },
        { value: '2', label: '2024' }
    ]
    const optionsMonth = [
        { value: '0', label: 'январь' },
        { value: '1', label: 'февраль' },
        { value: '2', label: 'март' },
        { value: '3', label: 'апрель' },
        { value: '4', label: 'май' },
        { value: '5', label: 'июнь' },
        { value: '6', label: 'июль' },
        { value: '7', label: 'август' },
        { value: '8', label: 'сентябрь' },
        { value: '9', label: 'октябрь' },
        { value: '10', label: 'ноябрь' },
        { value: '11', label: 'декабрь' }
    ]
    const sings = [
        { name: 'LESKIN', cover: '1.jpeg',
            style: ['POP'],
            striming: {
                ya: 'https://music.yandex.ru/album/32999422',
                vk: 'https://boom.ru/redirect/album/27188366?mt_sub1=%D0%A1%D1%82%D1%80%D0%B5%D0%BB%D1%8F%D0%B9&mt_sub2=%27album%27&mt_click_id=mt-iybts5-1728991863-2591923646&mt_sub3=27188366',
                apple: 'https://music.apple.com/ru/album/%D1%81%D1%82%D1%80%D0%B5%D0%BB%D1%8F%D0%B9-single/1764955787',
                mts: 'https://music.mts.ru/album/32999422',
                zvuk: 'https://zvuk.com/release/35138298',
                spotify: 'https://open.spotify.com/album/6taQhbQM5yJah867mGWYgK',
                itunes: 'https://music.apple.com/ru/album/%D1%81%D1%82%D1%80%D0%B5%D0%BB%D1%8F%D0%B9-single/1764955787',
                ok: '',
                dezeer: 'http://www.deezer.com/album/634708011'
            },
            music: [
                {
                    name: 'Стреляй',
                    autor: 'LESKIN',
                    url: 'files/music/music/leskin.mp3',
                    text: [''],
                    img: 'files/music/albom/4.jpg'
                },

            ],
            galary: ['1.jpeg', '2.jpg', "2-2.jpeg"], desc: '', news: ''
        },
        { name: 'VASI_LI', cover: '3.JPG',
            style: ['POP'],
            striming: {
                ya: 'https://music.yandex.ru/album/32826865',
                vk: 'https://boom.ru/redirect/album/27082097?mt_sub1=%D0%9C%D0%BE%D1%8F%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C&mt_click_id=mt-iybts5-1728964304-2927844160&mt_sub3=27082097&mt_sub2=%27album%27',
                apple: 'https://music.apple.com/ru/album/%D0%BC%D0%BE%D1%8F-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C-single/1762823631',
                mts: 'https://music.mts.ru/album/32826865',
                zvuk: 'https://zvuk.com/release/35000333',
                spotify: 'https://open.spotify.com/album/08S0Bv0HSTZ6SzC2kCqyrf',
                itunes: 'https://music.apple.com/ru/album/%D0%BC%D0%BE%D1%8F-%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C-single/1762823631',
                ok: '',
                dezeer: ''
            },
            music: [
                {
                    name: 'Моя любовь',
                    autor: 'VASI_LI',
                    url: 'files/music/music/vasi.mp3',
                    text: [''],
                    img: 'files/music/albom/4.jpg'
                },

            ],
            galary: ['3.JPG', '4.JPG', '5.JPG', '6.JPG'], desc: '', news: ''
        },
        { name: 'ZILBER', cover: '7.jpg',
            style: ['ROCK', 'POP'],
            striming: {
                ya: '',
                vk: '',
                apple: '',
                mts: '',
                zvuk: '',
                spotify: '',
                itunes: '',
                ok: '',
                dezeer: ''
            },
            music: [


            ],
            galary: ['7.jpg', '8.jpg'], desc: '', news: ''
        },
    ];
    return (
        <DataContext.Provider value={{
            getMonthName,
            optionsMonth,
            optionsYear,
            sings
        }}>
            {children}
            <ToastContainer />
        </DataContext.Provider>
    );
};