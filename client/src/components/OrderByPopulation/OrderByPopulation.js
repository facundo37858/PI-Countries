import React from "react";
import { useDispatch} from "react-redux";
import { orderByPopulation} from "../../actions";
import style from '../../css/styleFilters.module.css'

export default function OrderByPopulation(){

    

    let dispach=useDispatch()

    const handelOrder=(e)=>{
        e.preventDefault()

        dispach(orderByPopulation(e.target.value))
    }


     
    return(
        <div className={style.sidebarbox}>
            <p><label className={style.text} htmlFor='select-order'>Order By Population</label></p>

            <select className={style.styledselect} name='order' onChange={(e)=>handelOrder(e)}>
                <option value='ANY' defaultValue="selected">--Please choose an option--</option>
                <option value='ASC'>Acendent</option>
                <option value='DESC'>Decendent</option>

            </select>
        </div>
    )
}