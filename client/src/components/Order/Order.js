import React from "react";
import { useDispatch} from "react-redux";
import { order } from "../../actions";


export default function Order(){

    

    let dispach=useDispatch()

    const handelOrder=(e)=>{
        e.preventDefault()

        dispach(order(e.target.value))
    }


     
    return(
        <div>
            <p><label htmlFor='select-order'>Order:</label></p>

            <select name='order' onChange={(e)=>handelOrder(e)}>
                <option value='ANY'>--Please choose an option--</option>
                <option value='ASC'>A-Z</option>
                <option value='DESC'>Z-A</option>

            </select>
        </div>
    )
}


// {/* <p><label htmlFor='activity-select'>Filter by Activity</label></p>

// <select name='activity' onChange={(e)=>handelFilter(e)}>
//     {/* <option value='all'>--Please choose an option--</option> */}
//     <option value='all'>Show All</option>

//     {notRepitActivitiest.length>0&& notRepitActivitiest.map((activity,index)=>{

//         return(<option key={index} value={activity}>{activity}</option>)})
//     }    
        
   


    

// </select> */}