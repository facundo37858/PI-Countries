import React from "react";
import { Link } from "react-router-dom";

import style from './styles.module.css'
export default function Card({name,image,continent,id}){
    return(
        <div className={style.container}>


            
            <div className={style.cat}>
                <img  className={style.img} src={image} alt='flag country'></img>
            </div>
           
           
            <span className={style.name}>{name}</span> <Link className={style.name}to={`/details/${id}`}  style={{ textDecoration: 'none' }}><span className={style.plusInfo}>+Info</span></Link>
           
           
            <p className={style.description}>{continent}</p>
            
            

            
            
            
            
            
               
            


        </div>
    )
}


