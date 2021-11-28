
import React from "react";

import style from './style.module.css'

import {Link} from 'react-router-dom'





export default function Login(){
    return(
        <div className={style.img}>

            <div className={style.conteiner}>

                <p className={style.title}>Countries App</p>

                <Link to={'/home'}>

                <button className={style.button}>Sign In</button>

                </Link>


            </div>

        </div>
    )
}



  
        
