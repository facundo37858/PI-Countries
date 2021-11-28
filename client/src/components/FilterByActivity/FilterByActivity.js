import React from "react";
import { useSelector } from "react-redux";




export default function FilterByActivity(){

    let countriesAllBackup=useSelector(state=>state.countriesBackup)

   



    return (
        
        <div>
            <p><label htmlFor='activity-select'>Filter by Activity</label></p>

            <select name='activity'>
                <option value=''>--Please choose an option--</option>

                {/* {countriesAllBackup.length>0&& Countrycontinents.map((continent,index)=>{

                    return(<option key={index} value={continent}>{continent}</option>)})
                }     */}
                    
               


                

            </select>
        </div>
        
    )
    