import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByActivity} from "../../actions";




export default function FilterByActivity(){

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
        console.log(e.target.value)
        dispach(filterByActivity(e.target.value))

    }

   



    return(
        
        <div>
            <p><label htmlFor='activity-select'>Filter by Activity</label></p>

            <select name='activity' onChange={(e)=>handelFilter(e)}>
                {/* <option value='all'>--Please choose an option--</option> */}
                <option value='all'>Show All</option>

                {notRepitActivitiest.length>0&& notRepitActivitiest.map((activity,index)=>{

                    return(<option key={index} value={activity}>{activity}</option>)})
                }    
                    
               


                

            </select>
        </div>
        
    
    )}