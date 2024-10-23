import React, { useState } from 'react';
import style from './FormBid.module.scss';
import {useMessage} from "../../hooks/message.hook";

function FormBid({ setActivemodal, active }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [releaseName, setReleaseName] = useState('');
    const [socialLink, setSocialLink] = useState('');
    const [materialLink, setMaterialLink] = useState('');
    const [plans, setPlans] = useState('');
    const [emaildont, setEmaildont] = useState(false);
    const [namedont, setNamedont] = useState(false);
    const [releaseNamedont, setReleaseNamedont] = useState(false);
    const [socialLinkdont, setSocialLinkdont] = useState(false);
    const [materialLinkdont, setMaterialLinkdont] = useState(false);
    const [plansdont, setPlansdont] = useState(false);
    const message = useMessage();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(email.length < 5 && name.length < 2 && releaseName.length < 3 && socialLink.length < 5 && materialLink.length < 5 && plans.length < 5){
            message('Необходимо полностью заполнить форму')
            setEmaildont(true)
            setNamedont(true)
            setReleaseNamedont(true)
            setSocialLinkdont(true)
            setMaterialLinkdont(true)
            setPlansdont(true)
        }else{
            if(email.length < 5){
                message('Укажите ваш Email')
                setEmaildont(true)
            } else
            if(name.length < 2){
                message('Укажите Имя исполнителя')
                setNamedont(true)
            } else
            if(releaseName.length < 3){
                message('Укажите назавние релиза')
                setReleaseNamedont(true)
            } else
            if(socialLink.length < 5){
                message('Добавьте ссылку на соц.сеть')
                setSocialLinkdont(true)
            } else
            if(materialLink.length < 5){
                message('Добавьте ссылку на материал')
                setMaterialLinkdont(true)
            } else
            if(plans.length < 5){
                message('Расскажите о себе')
                setPlansdont(true)
            } else{


                // Собираем данные в объект
                const formData = {
                    email,
                    name,
                    releaseName,
                    socialLink,
                    materialLink,
                    plans,
                };

                try {
                    // Асинхронная отправка данных на сервер
                    const response = await fetch('/postamp.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData),
                    });

                    const result = await response.json(); // Предполагается, что PHP возвращает JSON

                    if (result.success) {
                        message('Ваша анкета успешно отправлена, Мы обязательно с ней ознакомимся')
                        // Здесь можно сбросить поля формы, если нужно
                        setEmail('');
                        setName('');
                        setReleaseName('');
                        setSocialLink('');
                        setMaterialLink('');
                        setPlans('');
                        setActivemodal(false)
                    } else {
                        message('Что-то пошло не так, попробуйте снова')
                    }
                } catch (error) {
                    console.error('Ошибка при отправке формы:', error);
                    message('Ошибка отправки, попробуйте снова')
                }
            }
        }
    };

    return (
        <div className={style.main}>
            <div className={style.cap}>
                <div className={style.title}>Отправить демо</div>
                <div className={style.desc}>
                    Мы в поиске талантливых молодых артистов, готовых на долгосрочное сотрудничество.
                </div>
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.title}>Email</div>
                <input
                    type="text"
                    placeholder="Email"
                    className={style.line}
                    value={email}
                    style={(emaildont)?{border: '4px solid #fd0c53'}:{}}
                    onChange={(e) => {setEmail(e.target.value); setEmaildont(false)}}
                />
                <div className={style.title}>Имя исполнителя</div>
                <input
                    type="text"
                    placeholder="Имя исполнителя"
                    className={style.line}
                    value={name}
                    style={(namedont)?{border: '4px solid #fd0c53'}:{}}
                    onChange={(e) => {setName(e.target.value); setNamedont(false)}}
                />
                <div className={style.title}>Название релиза</div>
                <input
                    type="text"
                    placeholder="Название релиза"
                    className={style.line}
                    value={releaseName}
                    style={(releaseNamedont)?{border: '4px solid #fd0c53'}:{}}
                    onChange={(e) => {setReleaseName(e.target.value); setReleaseNamedont(false)}}
                />
                <div className={style.title}>Ссылка на основную соц.сеть исполнителя</div>
                <input
                    type="text"
                    placeholder="Ссылка на основную соц.сеть исполнителя"
                    className={style.line}
                    value={socialLink}
                    style={(socialLinkdont)?{border: '4px solid #fd0c53'}:{}}
                    onChange={(e) => {setSocialLink(e.target.value); setSocialLinkdont(false)}}
                />
                <div className={style.title}>Ссылка на материал (релизы, демо)</div>
                <input
                    type="text"
                    placeholder="Ссылка на материал (релизы, демо)"
                    className={style.line}
                    value={materialLink}
                    style={(materialLinkdont)?{border: '4px solid #fd0c53'}:{}}
                    onChange={(e) => {setMaterialLink(e.target.value); setMaterialLinkdont(false)}}
                />
                <div className={style.storyblock}>
                    <div className={style.title}>Расскажите о своих планах</div>
                    <textarea
                        className={style.text}
                        value={plans}
                        style={(plansdont)?{border: '4px solid #fd0c53'}:{}}
                        onChange={(e) => {setPlans(e.target.value); setPlansdont(false)}}
                    ></textarea>
                </div>
                <button type="submit" className={style.btn}>
                    Отправить
                </button>
            </form>
        </div>
    );
}

export default FormBid;