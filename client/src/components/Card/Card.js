import React from "react";
import { Link } from "react-router-dom";

import style from './styles.module.css'
export default function Card({name,image,continent,id}){
    return(
        <div className={style.container}>


            
            <div className={style.cat}>
                <img  className={style.img} src={image} alt='flag country'></img>
            </div>
           
           
            <Link to={`/details/${id}`}  style={{ textDecoration: 'none' }}><p className={style.name}>{name}</p></Link>
           
           
            <p className={style.description}>{continent}</p>
            
            

            
            
            
            
            
               
            


        </div>
    )
}


