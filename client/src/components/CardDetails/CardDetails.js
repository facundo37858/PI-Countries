import React from "react";
import style from './style.module.css'



export default function CardDetails({countryById}){
    return(
        <>
            {countryById.activities.map((a,i)=>{return(
                <div className={style.contenedorActivity} key={i+46772}>
                    <p className={style.text} key={a.country_activity.activityUid+i+1}>Activity: {a.name}</p>
                    <p className={style.text} key={a.country_activity.activityUid+i+2}>Difficulty: {a.difficulty}</p>
                    <p className={style.text} key={a.country_activity.activityUid+i+3}>Duration: {a.duration}min</p>
                    <p className={style.text} key={a.country_activity.activityUid+i+4}>Season: {a.season}</p>
                </div>
        
        
                )})
            }
        </>
    )
}

