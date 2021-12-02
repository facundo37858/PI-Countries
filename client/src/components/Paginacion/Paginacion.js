import React from "react";
import style from './style.module.css'
export default function Paginacion({countriesPerPage, totalCountries, handelPiginet,handelPrevPage,handelNextPage}){
    
    const pegeNumbers=[]

    for(let i=1;i<=Math.ceil(totalCountries/countriesPerPage);i++){
        pegeNumbers.push(i)
    }


    return(
        <nav>
            <ul className={style.ul}>
            <button onClick={(e)=>{handelPrevPage(e)}}>Prev</button>
                
                {pegeNumbers.map(num=>{
                    return(
                        <li  key={num}className={style.li}>
                            <button onClick={()=>handelPiginet(num)}>{num}</button>
                        </li>
                    )
                })}
                <button onClick={(e)=>{handelNextPage(e)}}>Next</button>
            </ul>

        </nav>
    )
}