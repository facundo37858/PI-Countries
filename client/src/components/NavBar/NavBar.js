

import React from "react";
import { Link } from "react-router-dom";
import FilterByActivity from "../FilterByActivity/FilterByActivity";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import Order from "../Order/Order";
import Search from "../Search/Search";

import style from './style.module.css'

export default function NavBar(){


    return(
        <div className={style.navBar}>

            

            
            
            <Link to='/addActivity'>Add Activity</Link>
            <div className={style.search}>
                <Search></Search>
            </div>
            <div className={style.filters}>
                <FilterByContinent></FilterByContinent>
                <FilterByActivity></FilterByActivity>
                <Order/>
            </div>
            

            
          

        </div>
    )
}
