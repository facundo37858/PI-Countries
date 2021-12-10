import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountriesById } from "../../actions";
import style from './style.module.css'


export default function Details({match}){
    //console.log(match.params.id)

    let [countryById]=useSelector(state=>state.countryById)

    //console.log(countryById)
    

    let dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getCountriesById(match.params.id))
    },[dispatch,match.params.id])

    return(
        <div className={style.contenedor}>
            <div>
                <h1 className={style.title2}> Details</h1>
            <Link style={{ textDecoration: 'none' }} to='/home'><button className={style.buttonHome}>Home</button></Link>
            </div>
            <div className={style.contenedor2}>
                <div> 
                    <h1 className={style.title}>{countryById?.name}</h1>
                    <img src={countryById?.image} alt='country flag' width='250px' height='175px'/>


                </div>
               
                <div className={style.contenedorInfo}>
                    <div>
                        <p className={style.text2}>{countryById?.id}</p>
                        <p className={style.text2} >{countryById?.continent}</p>
                        <p className={style.text2} >{countryById?.capital}</p>
                        <p className={style.text2}>{countryById?.subregion}</p>
                        <p className={style.text2}>Area: {countryById?.area} Km2</p>
                        <p className={style.text2}>Population: {countryById?.population}</p>
                    </div>
               

                
                    <div>
                    {/* <p className={style.text}>Activities</p> */}
                    {countryById?.activities.length>0?
                        
                    countryById.activities.map((a,i)=>{return(
                        <div className={style.ul} key={i+46772}>
                            <p className={style.text3} key={a.country_activity.activityUid+i+1}>Activity: {a.name}</p>
                            <p className={style.text3} key={a.country_activity.activityUid+i+2}>Difficulty: {a.difficulty}</p>
                            <p className={style.text3} key={a.country_activity.activityUid+i+3}>Duration: {a.duration}min</p>
                            <p className={style.text3} key={a.country_activity.activityUid+i+4}>Season: {a.season}</p>
                        </div>
                            
                            
                    )})

                    :<p className={style.description}>No activity added</p>}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

// "name": "TREIK",
//                 "difficulty": 1,
//                 "duration": "120",
//                 "season": "verano",