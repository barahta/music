import style from './styles/Gallery.module.scss'
import SmallHeader from "../components/header/SmallHeader"
import SmallFooter from "../components/footer/SmallFooter"
import GalaryList from "../components/gallery/GalaryList";

function Gallery () {


    return (
        <div className={style.bodymain}>
            <SmallHeader />
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.title}>Галерея</div>
                    <GalaryList />
                </div>
            </div>
            {/*<FooterBlock />*/}
            <SmallFooter />
        </div>
    )
}

export default Gallery