import React from "react";
import { Link } from "react-router-dom";

import style from './styles.module.css'
export default function Card({name,image,continent,id}){
    return(
        <div className={style.container}>

            <Link to={`/details/${id}`}  style={{ textDecoration: 'none' }}><p className={style.name}>{name}</p></Link>

            <div className={style.img}>

                <img src={image} alt='flag country' width='250px' height='175px'></img>
            </div>
            
            
            
            
            <p className={style.description}>{continent}</p>
               
            


        </div>
    )
}


