import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountriesById } from "../../actions";


export default function Details({match}){
    console.log(match.params.id)

    let [countryById]=useSelector(state=>state.countryById)

    console.log(countryById)
    

    let dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getCountriesById(match.params.id))
    },[dispatch])

    return(
        <div>
            <div>
                <Link to='/home'><div>Home</div></Link>
            </div>
            <div>
                <h1>{countryById?.name}</h1>
                <img src={countryById?.image} alt='country flag'/>
                <ul>
                    <li >{countryById?.id}</li>
                    <li  >{countryById?.continent}</li>
                    <li  >{countryById?.capital}</li>
                    <li >{countryById?.subregion}</li>
                    <li >{countryById?.area}Km2</li>
                    <li >{countryById?.population}</li>
                    
                        <p>Activities</p>
                        {countryById?.activities.length>0?
                        
                        countryById.activities.map((a,i)=>{return(
                            <ul key={i+46772}>
                                <li key={a.country_activity.activityUid+i+1}>Activity: {a.name}</li>
                                <li key={a.country_activity.activityUid+i+2}>difficulty: {a.difficulty}</li>
                                <li key={a.country_activity.activityUid+i+3}>duration: {a.duration}min</li>
                                <li key={a.country_activity.activityUid+i+4}>season: {a.season}</li>
                            </ul>
                            
                            
                        )})

                        :<p>No activity added</p>}
                    
                </ul>
            </div>
        </div>
    )
}

// "name": "TREIK",
//                 "difficulty": 1,
//                 "duration": "120",
//                 "season": "verano",