import React from "react";
import { useDispatch} from "react-redux";
import { order } from "../../actions";
import style from '../../css/styleFilters.module.css'


export default function Order(){

    

    let dispach=useDispatch()

    const handelOrder=(e)=>{
        e.preventDefault()

        dispach(order(e.target.value))
    }


     
    return(
        <div className={style.sidebarbox}>
            <p><label className={style.text} htmlFor='select-order'>Alphabetical Order</label></p>

            <select className={style.styledselect} name='order' onChange={(e)=>handelOrder(e)}>
                <option value='ANY' defaultValue="selected">--Please choose an option--</option>
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