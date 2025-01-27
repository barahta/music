import { useEffect, useRef, useState } from 'react';
import style from './GalaList.module.scss';
import WriteModal from "../modalwin/WriteModal";
import OpenImg from "./OpenImg";
import NewsService from "../../services/NewsService";

function GalaryList (){

    const images = [
        {
            src: '1231.jpg',
        },
        {
            src: '1232.jpg',
        },
        {
            src: '1233.jpg',
        },
        {
            src: '1234.jpg',
        },
        {
            src: '1235.jpg',
        },
        {
            src: '1236.jpg',
        },
        {
            src: '2231.jpg',
        },
        {
            src: '2232.jpg',
        },
        {
            src: '2233.jpg',
        },
        {
            src: '2234.jpg',
        },
        {
            src: '2235.jpg',
        },
        {
            src: '2236.jpg',
        },
        {
            src: '2237.jpg',
        },
        {
            src: 'aqua1.jpg',
        },
        {
            src: 'aqua2.jpg',
        },
        {
            src: 'aqua3.jpg',
        },
        {
            src: 'aqua4.jpg',
        },
        {
            src: 'aqua5.jpg',
        },
        {
            src: 'aqua6.jpg',
        },
        {
            src: 'aqua7.jpg',
        },
        {
            src: 'aqua8.jpg',
        },
        {
            src: 'aqua9.jpg',
        },
        {
            src: 'aqua10.jpg',
        },
        {
            src: 'aqua11.jpg',
        },
        {
            src: 'aqua12.jpg',
        },
        {
            src: 'box1.jpg',
        },
        {
            src: 'box2.jpg',
        },
        {
            src: 'box3.jpg',
        },
        {
            src: 'cardio1.png',
        },
        {
            src: 'cardio2.jpg',
        },
        {
            src: 'cardio3.jpeg',
        },
        {
            src: 'cardio4.jpg',
        },
        {
            src: 'cardio5.png',
        },
        {
            src: 'cardio6.jpg',
        },
        {
            src: '35.jpg',
        },
        {
            src: '36.jpg',
        },
        {
            src: '37.jpg',
        },
        {
            src: '38.jpg',
        },
        {
            src: '39.jpg',
        },
        {
            src: '40.jpg',
        },
        {
            src: '41.jpg',
        },
        {
            src: '42.jpg',
        },
        {
            src: '43.jpg',
        },
        {
            src: '44.jpg',
        },
        {
            src: '45.jpg',
        },
        {
            src: '46.jpg',
        },
        {
            src: '47.jpg',
        },
        {
            src: '48.jpg',
        }
    ]

    const containerRef = useRef(null);
    const [gridItems, setGridItems] = useState([]);
    const [activemodal, setActivemodal] = useState(false);
    const [data, setData] = useState('');
    const [more, setMore] = useState(8)
    const [allIngs, setAllImgs] = useState([])

    const postResume = (pos) => {
        setData(pos)
        setActivemodal(true)
    }
    useEffect(() => {
        const container = containerRef.current;
        const updateGridItems = () => {
            if (container) {
                const items = Array.from(container.querySelectorAll('.item'));
                setGridItems(items);
            }
        };

        window.addEventListener('resize', updateGridItems);
        updateGridItems();

        return () => window.removeEventListener('resize', updateGridItems);
    }, [allIngs]);


    const getGalleryImgs = async () => {
        try{
            const {data} = await NewsService.getGalleryImgs({capter: 'music'})
            if(data){
                console.log(data)
                data.reverse()
                setAllImgs(data)
            }
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getGalleryImgs()
    }, [])

    return (
        <div className={style.main}>
            <WriteModal activemodal={activemodal} setActivemodal={setActivemodal} data={<OpenImg img={data} />} setData={setData}/>
            <div className={style.grid} ref={containerRef}>
                {allIngs.map((image, index) =>{ if(index<more){return(
                    <div key={index} className={style.item} onClick={()=>postResume(image.image)}>
                        <img src={`${process.env.REACT_APP_API_URL}${image.image}`} alt={`Gallery ${index}`} />
                    </div>
                )}})}
            </div>
            <div className={style.more} onClick={()=>setMore(more+8)} style={(allIngs.length <= more)?{display: 'none'}:{}}>ЕЩЁ</div>
        </div>
    );
}

export default GalaryList;