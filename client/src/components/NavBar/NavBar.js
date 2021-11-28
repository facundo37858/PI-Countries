

import React from "react";
import { Link } from "react-router-dom";
import FilterByActivity from "../FilterByActivity/FilterByActivity";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import Search from "../Search/Search";

import style from './style.module.css'

export default function NavBar(){


    return(
        <div>

            
            <Link to='/home'><div className={style.home}>Home</div></Link>
            
            <Search></Search>

            <FilterByContinent></FilterByContinent>
            <FilterByActivity></FilterByActivity>
           
          

        </div>
    )
}