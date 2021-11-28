import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../actions";




export default function FilterByActivity(){

    let activities=useSelector(state=>state.activities)

    console.log(activities)

    const activitiesNotRepit=(activities)=>{

        let activitiesNotRepit=new Set(activities.map(activity=>{
            return activity.name
        }))
        return Array.from(activitiesNotRepit).sort()
    }

    

  

    let notRepitActivitiest=activitiesNotRepit(activities)

   



    return(
        
        <div>
            <p><label htmlFor='activity-select'>Filter by Activity</label></p>

            <select name='activity'>
                <option value=''>--Please choose an option--</option>

                {notRepitActivitiest.length>0&& notRepitActivitiest.map((activity,index)=>{

                    return(<option key={index} value={activity}>{activity}</option>)})
                }    
                    
               


                

            </select>
        </div>
        
    
    )}