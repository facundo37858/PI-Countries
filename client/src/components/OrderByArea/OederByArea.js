import React from "react";
import { useDispatch } from "react-redux";
import { orderByArea } from "../../actions";


export default function OrderByArea(){

    let dispach=useDispatch()

    const handelOrder=(e)=>{
        e.preventDefault()
        dispach(orderByArea(e.target.value))
    }





    return(
        <div >
            <p><label  htmlFor='select-order'>Order By Area</label></p>

            <select  name='orderByArea' onChange={(e)=>handelOrder(e)}>
                <option value='ANY' defaultValue="selected">--Please choose an option--</option>
                
                <option value='DESC'>Des</option>

            </select>
        </div>
    )
}