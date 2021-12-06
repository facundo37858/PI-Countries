

import React from "react";
import { Link } from "react-router-dom";
import FilterByActivity from "../FilterByActivity/FilterByActivity";
import FilterByContinent from "../FilterByContinent/FilterByContinent";
import Order from "../Order/Order";
import OrderByPopulation from "../OrderByPopulation/OrderByPopulation";
import Search from "../Search/Search";

import style from './style.module.css'

export default function NavBar(){


    return(
        <div className={style.navBar}>

            

            
            <div  >
                <Link  to='/addActivity'><button className={style.links}>Add Activity</button></Link>
            </div>
            
            <div className={style.search}>
                <Search></Search>
            </div>
            <div className={style.filters}>
                <FilterByContinent></FilterByContinent>
                <FilterByActivity></FilterByActivity>
                <Order/>
                <OrderByPopulation></OrderByPopulation>
            </div>
            

            
          

        </div>
    )
}
