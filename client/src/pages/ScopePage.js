import { useEffect, useRef } from "react";
import style from './styles/Main.module.scss';
import scope from './styles/Scope.module.scss';
import FooterBlock from "../components/footer/Footer";
import SmallHeader from "../components/header/SmallHeader";
import AboutBlock from "../components/about/AboutBlock";
import SmallFooter from "../components/footer/SmallFooter";

function ScopePage() {
    const bidsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(scope.visible);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (bidsRef.current) {
            bidsRef.current.forEach((bid) => {
                if (bid) observer.observe(bid);
            });
        }

        // Cleanup observer on unmount
        return () => {
            if (bidsRef.current) {
                bidsRef.current.forEach((bid) => {
                    if (bid) observer.unobserve(bid);
                });
            }
        };
    }, []);

    return (
        <div className={style.bodymain}>
            <SmallHeader />
            <div className={style.main}>
                <div className={style.container}>
                    <div className={scope.main}>
                        <div className={scope.title}>Возможности</div>
                        <div className={scope.scope}>
                            {['Продакшн', 'Лицензирование', 'Продвижение', 'Организация выступлений', 'Контент-менеджмент'].map((title, index) => (
                                <div
                                    key={index}
                                    ref={el => bidsRef.current[index] = el}
                                    className={`${scope.bid}`}
                                >
                                    <i className={`fa-solid fa-${index === 0 ? 'wand-magic-sparkles' : index === 1 ? 'pen-nib' : index === 2 ? 'bolt' : index === 3 ? 'users-rays' : 'icons'}`}/>
                                    <div className={scope.title}>{title}</div>
                                    <div className={scope.desc}>
                                        {index === 0 ? 'Полный цикл создания музыкального произведения в собственной студии' :
                                            index === 1 ? 'Монетизация аудио и видео контента исполнителя' :
                                                index === 2 ? 'Определение целевой аудитории исполнителя и формирование индивидуального плана его продвижения' :
                                                    index === 3 ? 'Подготовка выступлений на различных площадках, в том числе на большом фестивале группы компаний OMEDIA' :
                                                        'Управление контентом и его доведение до целевой аудитории'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SmallFooter />
        </div>
    );
}

export default ScopePage;
