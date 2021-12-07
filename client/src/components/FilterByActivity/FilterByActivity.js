import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity} from "../../actions";
import style from '../../css/styleFilters.module.css'




export default function FilterByActivity({handelPiginet}){

    let activities=useSelector(state=>state.activities)

    //console.log(activities)

    const activitiesNotRepit=(activities)=>{

        let activitiesNotRepit=new Set(activities.map(activity=>{
            return activity.name
        }))
        return Array.from(activitiesNotRepit).sort()
    }

    

  

    let notRepitActivitiest=activitiesNotRepit(activities)

    let dispach=useDispatch()

    const handelFilter=(e)=>{
        e.preventDefault()
        //console.log(e.target.value)
        dispach(filterByActivity(e.target.value))
        handelPiginet(1)

    }

   



    return(
        
        <div className={style.sidebarbox}>
            <p ><label className={style.text} htmlFor='activity-select'>Filter by Activity</label></p>

            <select className={style.styledselect} name='activity' onChange={(e)=>handelFilter(e)}>
                {/* <option value='all'>--Please choose an option--</option> */}
                <option value='all' defaultValue="selected">Show All</option>

                {notRepitActivitiest.length>0&& notRepitActivitiest.map((activity,index)=>{

                    return(<option key={index} value={activity}>{activity}</option>)})
                }    
                    
               


                

            </select>
        </div>
        
    
    )}


    
//   <div class="sidebar-box">
//   <select class="styled-select">
//   <option>Selecciona una opción</option>
//   <option>Lunes</option>
//   <option>Martes</option>
//   <option>Miércoles</option>
//   <option>Jueves</option>   <option>Viernes</option>
//   </select></div>