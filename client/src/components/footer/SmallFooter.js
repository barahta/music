import style from './SmallFooter.module.scss'
import {Link} from "react-router-dom";
import NewsService from "../../services/NewsService";
import {useEffect, useState} from "react";

function SmallFooter (){

    const [data, setData] = useState('')
    const [thisContacts, setThisContacts] = useState([]);
    const getCities = async () => {
        try{
            const {data} = await NewsService.getCities({capter: 'music'})
            setThisContacts(data)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getCities()
    }, [])

    return(
        <div className={style.main}>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.nav}>
                        <Link to='/about' className={style.line}>О нас</Link>
                        <Link to='/singers' className={style.line}>Артисты</Link>
                        <Link to='/scope' className={style.line}>Возможности</Link>
                    </div>
                </div>
                <div className={style.follow}>
                        <div className={style.title}>Подпишись</div>
                        <div className={style.icons}>
                            {/*<Link target="_blank" rel="noopener noreferrer" to='https://vk.com/omediamusic'><i className="fa-brands fa-vk"/></Link>*/}
                            <a href={(thisContacts[0])?thisContacts[0].instagram:''} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"/></a>
                            <a href={(thisContacts[0])&&thisContacts[0].telegram} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-telegram"/></a>
                            <a href={(thisContacts[0])&&thisContacts[0].vk} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-vk"/></a>
                            {/*<a href={(thisContacts[0])&&thisContacts[0].ok} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-vk"/></a>*/}

                            {/*<i className="fa-brands fa-telegram"/>*/}
                            {/*<i className="fa-brands fa-square-instagram"/>*/}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SmallFooter