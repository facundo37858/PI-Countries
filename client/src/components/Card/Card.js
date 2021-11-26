import React from "react";

import style from './styles.module.css'
export default function Card({name,image,continent}){
    return(
        <div className={style.container}>

            <p className={style.name}>Country:{name}</p>

            <div className={style.img}>

                <img src={image} alt='flag country' width='250px' height='175px'></img>
            </div>
            
            
            
            
            <p className={style.description}>Continent:{continent}</p>
               
            


        </div>
    )
}


