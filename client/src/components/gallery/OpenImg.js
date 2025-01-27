import style from './OpenStyle.module.scss'

function OpenImg ({img}){

    return(
        <div className={style.main}>
            <img src={`${process.env.REACT_APP_API_URL}${img}`} alt=""/>
        </div>
    )
}

export default OpenImg